import { FileItem } from './../models/fileItem';
import { Injectable } from '@angular/core';

import { AngularFireStorage } from 'angularfire2/storage';
import { AngularFirestore } from 'angularfire2/firestore';
import * as firebase from 'firebase'

@Injectable()
export class FileuploadService {

  private DIRECTORY_IMAGES = 'img'

  constructor(
    private firestorage : AngularFireStorage,
    private db: AngularFirestore ) { 
  }


  private saveImage( image : { name : string , url : string } ) {
    this.db.collection(`/${ this.DIRECTORY_IMAGES }`).add( image )
  }

  public loadFilesToFirebase( files : FileItem[] ) {
    const storageRef = firebase.storage().ref()

    for( const item of files ) {
      item.isuploading = true
      if( item.progress >= 100 ){
        continue;
      }

      const uploadTask : firebase.storage.UploadTask = 
        storageRef.child(`${this.DIRECTORY_IMAGES}/${item.filename}`)
                  .put(item.file)
      
      uploadTask.on( firebase.storage.TaskEvent.STATE_CHANGED, 
       (snapshot :firebase.storage.UploadTaskSnapshot) => item.progress = ( snapshot.bytesTransferred / snapshot.totalBytes) * 100 ,
       (error) => console.error('Error al subir Archivo', error),
       () => {
         console.log('Archivo cargado')
         item.url = uploadTask.snapshot.downloadURL
         item.isuploading = false

        this.saveImage( { name: item.filename , url : item.url , })

       }
      )

    }

  }

}
