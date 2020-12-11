import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { RouteReuseStrategy } from "@angular/router";

import { IonicModule, IonicRouteStrategy } from "@ionic/angular";
import { SplashScreen } from "@ionic-native/splash-screen/ngx";
import { StatusBar } from "@ionic-native/status-bar/ngx";

import { AppComponent } from "./app.component";
import { AppRoutingModule } from "./app-routing.module";

import { ImagePicker } from "@ionic-native/image-picker/ngx";
import { MediaCapture } from "@ionic-native/media-capture/ngx";
import { Media } from "@ionic-native/media/ngx";
import { StreamingMedia } from "@ionic-native/streaming-media/ngx";
import { PhotoViewer } from "@ionic-native/photo-viewer/ngx";
import { File } from "@ionic-native/File/ngx";
import { Camera } from "@ionic-native/camera/ngx";
import { FilePath } from "@ionic-native/file-path/ngx";
import { InAppBrowser } from "@ionic-native/in-app-browser/ngx";

import { AngularFireModule } from "@angular/fire";
import { AngularFireAuthModule } from "@angular/fire/auth";
import { AngularFirestoreModule } from "@angular/fire/firestore";
import { AngularFireStorageModule } from "@angular/fire/storage";
import { environment } from "src/environments/environment";

import { IonicStorageModule } from "@ionic/storage";
import { GeneralpipePipe } from "./generalpipe.pipe";

@NgModule({
  declarations: [AppComponent, GeneralpipePipe],
  entryComponents: [],
  imports: [
    BrowserModule,
    IonicModule.forRoot(),
    AppRoutingModule,
    AngularFireModule.initializeApp(environment.firebaseConfig),
    AngularFireAuthModule,
    AngularFirestoreModule,
    IonicStorageModule.forRoot(),
    IonicModule.forRoot(),
    AngularFireStorageModule,
  ],
  providers: [
    StatusBar,
    SplashScreen,
    { provide: RouteReuseStrategy, useClass: IonicRouteStrategy },
    ImagePicker,
    MediaCapture,
    File,
    Media,
    StreamingMedia,
    PhotoViewer,
    Camera,
    File,
    FilePath,
    InAppBrowser,
  ],
  bootstrap: [AppComponent],
})
export class AppModule {
  // firebase.
}
