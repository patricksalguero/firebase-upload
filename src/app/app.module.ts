import { APP_ROUTES } from './app.routes';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AngularFireModule } from 'angularfire2';
import { AngularFireStorageModule } from 'angularfire2/storage';
import { AngularFirestore } from 'angularfire2/firestore';
import { environment } from '../environments/environment';

import { AppComponent } from './app.component';
import { NavbarComponent } from './components/shared/navbar/navbar.component';
import { GalleryComponent } from './components/gallery/gallery.component';
import { FileuploadComponent } from './components/fileupload/fileupload.component';
import { FileuploadService } from './services/fileupload.service';
import { NgdropfilesDirective } from './directives/ngdropfiles.directive';


@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    GalleryComponent,
    FileuploadComponent,
    NgdropfilesDirective
  ],
  imports: [
    BrowserModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireStorageModule,
    APP_ROUTES
  ],
  providers: [
    FileuploadService,
    AngularFirestore
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
