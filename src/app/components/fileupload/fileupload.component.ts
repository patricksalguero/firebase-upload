import { FileItem } from './../../models/fileItem';
import { FileuploadService } from './../../services/fileupload.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-fileupload',
  templateUrl: './fileupload.component.html',
  styles: []
})
export class FileuploadComponent implements OnInit {

  public files : FileItem[] = []
  public onDrop : boolean = false

  constructor(
    public fileupload : FileuploadService
  ) { }

  ngOnInit() {
  }

  loadFiles() {
    this.fileupload.loadFilesToFirebase( this.files )
  }

  cleanFiles() {
    this.files = []
  }

}
