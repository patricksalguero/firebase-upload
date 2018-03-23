import { FileItem } from './../models/fileItem';
import { Directive , EventEmitter , ElementRef , 
         HostListener, Input , Output, Host} from '@angular/core';

@Directive({
  selector: '[appNgdropfiles]'
})
export class NgdropfilesDirective {

  @Input()  files : FileItem[] = []
  @Output() mouseOn : EventEmitter<boolean> = new EventEmitter()

  constructor() { }

  @HostListener('dragover', ['$event'])
  public onDragEnter( event : any ) {
    this.mouseOn.emit(true)
    this._preventAndStop(event)
  }

  @HostListener('dragleave', ['$event'])
  public onDragLeave( event : any ) {
    this.mouseOn.emit(false)
  }

  @HostListener('drop', ['$event'])
  public onDrop( event : any ) {
    let transfer = this._getTransfer( event )
    
    if( !transfer ) return 

    this._extractFiles( transfer.files )
    this._preventAndStop(event)
    this.mouseOn.emit(false)
  
  }

  private _extractFiles( fileList : FileList ) {
    // console.log( fileList )
    for( const file in Object.getOwnPropertyNames(fileList) ) {
      const fileTemp = fileList[file]
      if( this._fileCanLoad( fileTemp) ) {
        const newFile = new FileItem( fileTemp )
        this.files.push(newFile)
      }
    }
    console.log( this.files )
  }

  private _getTransfer( event : any ) {
    return event.dataTransfer ? event.dataTransfer : event.originalEvent.dataTransfer
  }

  //Validaciones
  private _fileCanLoad( file : File ) : boolean {
    if( !this._fileExistDrop( file.name ) && this._isImage( file.type )){
      return true
    }
    return false
  }


  private _preventAndStop( event : any ) {
    event.preventDefault()
    event.stopPropagation()
  }

  private _fileExistDrop( filename : string ) : boolean {
    for( const file of this.files ) {
      if( file.filename == filename ){
        console.log( 'El archivo ya existe' )
        return true
      }
    }
    return false
  }

  private _isImage( filetype : string ) : boolean {
    return (filetype == '' || filetype == undefined) ? false : (filetype.startsWith('image'))
  }



}
