import { Component, OnInit } from "@angular/core";
import {
  AngularFirestore,
  AngularFirestoreCollection,
} from "@angular/fire/firestore";
import { AngularFireStorage } from "@angular/fire/storage";
import { Router } from "@angular/router";
import { MenuController } from "@ionic/angular";
import { Observable } from "rxjs";

export interface MyData {
  name: string;
  filepath: string;
  size: number;
}

@Component({
  selector: "app-home",
  templateUrl: "./home.page.html",
  styleUrls: ["./home.page.scss"],
})
export class HomePage implements OnInit {
  images: Observable<MyData[]>;

  private imageCollection: AngularFirestoreCollection<MyData>;
  constructor(
    private menu: MenuController,
    public router: Router,
    private storage: AngularFireStorage,
    private database: AngularFirestore
  ) {
    this.imageCollection = database.collection<MyData>("UserImage");
    this.images = this.imageCollection.valueChanges();
  }

  ngOnInit() {}

  openFirst() {
    this.menu.enable(true, "first");
    this.menu.open("first");
  }

  openSecond() {
    this.menu.enable(false, "first");
    this.menu.open("first");
  }

  navigate(path) {
    console.log(path);
    this.router.navigate([path]);
  }
}
