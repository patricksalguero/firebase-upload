import { AngularFirestore, AngularFirestoreCollection } from 'angularfire2/firestore';
import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs/Observable'

export interface Item { name : string , url : string }

@Component({
  selector: 'app-gallery',
  templateUrl: './gallery.component.html',
  styles: []
})
export class GalleryComponent implements OnInit {

  private itemsCollection: AngularFirestoreCollection<Item>;
  items: Observable<Item[]>;

  constructor( private afs : AngularFirestore) {
    this.itemsCollection = this.afs.collection<Item>('img');
    this.items = this.itemsCollection.valueChanges();
    console.log(this.items)
  }

  ngOnInit() {
  }



}
