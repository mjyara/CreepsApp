import { Component, OnInit } from "@angular/core";
import { AngularFireAuth } from "@angular/fire/auth";
import { Router, RouterLink } from "@angular/router";
import firebase from "firebase";
import { environment } from "src/environments/environment";
import { Storage } from "@ionic/storage";

@Component({
  selector: "app-add",
  templateUrl: "./add.page.html",
  styleUrls: ["./add.page.scss"],
})
export class AddPage implements OnInit {
  recaptchaVerifier: firebase.auth.RecaptchaVerifier;
  confirmationResult: firebase.auth.ConfirmationResult;
  codeSent: boolean = false;
  phoneNumber;
  users = [];
  firestore;
  constructor(
    public firebaseAuth: AngularFireAuth,
    public router: Router,
    public storage: Storage
  ) {}

  ngOnInit() {
    if (!firebase.apps.length) {
      firebase.initializeApp(environment.firebaseConfig);
    }
    this.recaptchaVerifier = new firebase.auth.RecaptchaVerifier(
      "recaptcha-container",
      {
        size: "invisible",
      }
    );
    this.firestore = firebase.firestore();
    this.firestore.collection("users").onSnapshot(
      (y) => {
        this.users = [];
        y.docs.forEach((element) => {
          this.users.push(element.data());
        });
      },
      (err) => {
        console.error("An error occurred", err.message);
      }
    );
  }

  sendcode() {
    this.phoneNumber = `+63${
      (<HTMLInputElement>document.getElementById("Phone_number")).value
    }`;
    this.firebaseAuth
      .signInWithPhoneNumber(this.phoneNumber, this.recaptchaVerifier)
      .then((result) => {
        this.codeSent = true;
        this.confirmationResult = result;
        alert("Code sent!");
      })
      .catch((err) => {
        alert(err.message);
      });
  }

  verifycode() {
    const verificationCode = (<HTMLInputElement>(
      document.getElementById("verification_code")
    )).value;
    this.confirmationResult
      .confirm(verificationCode)
      .then((result) => {
        this.adduser(result.user);
      })
      .catch((err) => {
        alert(err.message);
      });
  }

  adduser(user: firebase.User) {
    let usersLength = this.users.length;
    for (let i = 0; i < usersLength; i++) {
      if (
        this.users[i].uid === user.uid ||
        this.users[i].phoneNumber === user.phoneNumber
      ) {
        this.router.navigate(["/"]);
        return;
      }
    }
    const data = { uid: user.uid, phoneNumber: user.phoneNumber };
    this.firestore
      .collection("users")
      .add(data)
      .then(() => {
        alert("Add New Account successful!");
        this.storage.set("user", data).then(() => {
          this.router.navigate(["/"]);
        });
      })
      .catch((err) => console.error(err));
  }
}
