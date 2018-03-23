import { FileuploadComponent } from './components/fileupload/fileupload.component';
import { GalleryComponent } from './components/gallery/gallery.component';
import { RouterModule , Routes } from '@angular/router';

const appRoutes: Routes = [
  { path: 'gallery',         component: GalleryComponent },
  { path: 'fileupload',      component: FileuploadComponent },
  { path : '**',           component: GalleryComponent }
];

export const APP_ROUTES = RouterModule.forRoot( appRoutes, { useHash: true } );