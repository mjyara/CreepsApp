import { Component, OnInit } from "@angular/core";
import { AngularFireAuth } from "@angular/fire/auth";
import { AngularFirestore } from "@angular/fire/firestore";
import { Router } from "@angular/router";
import firebase from "firebase";
import { environment } from "src/environments/environment";
import { Storage } from "@ionic/storage";

@Component({
  selector: "app-login",
  templateUrl: "./login.page.html",
  styleUrls: ["./login.page.scss"],
})
export class LoginPage implements OnInit {
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
    this.storage.get("users").then((value) => {
      if (value !== null) {
        console.log(value);
        this.router.navigate(["/"]);
      }
    });
    firebase.initializeApp(environment.firebaseConfig);
    this.recaptchaVerifier = new firebase.auth.RecaptchaVerifier(
      "recaptcha-container",
      {
        size: "invisible",
      }
    );
    this.firestore = firebase.firestore();

    this.firestore.collection("users").onSnapshot(
      (x) => {
        this.users = [];
        x.docs.forEach((element) => {
          this.users.push(element.data());
        });
      },
      (err) => {
        console.error("An error occurred", err.message);
      }
    );
  }

  sendCode() {
    this.phoneNumber = `+63${
      (<HTMLInputElement>document.getElementById("phone_number")).value
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

  verifyCode() {
    const verificationCode = (<HTMLInputElement>(
      document.getElementById("verification_code")
    )).value;
    this.confirmationResult
      .confirm(verificationCode)
      .then((result) => {
        this.addUser(result.user);
      })
      .catch((err) => {
        alert(err.message);
      });
  }

  addUser(user: firebase.User) {
    let usersLength = this.users.length;
    for (let i = 0; i < usersLength; i++) {
      if (
        this.users[i].uid === user.uid ||
        this.users[i].phoneNumber === user.phoneNumber
      ) {
        this.router.navigate(["/home"]);
        return;
      }
    }
    const data = { uid: user.uid, phoneNumber: user.phoneNumber };
    this.firestore
      .collection("users")
      .add(data)
      .then(() => {
        alert("Registration successful!");
        this.storage.set("user", data).then(() => {
          this.router.navigate(["/home"]);
        });
      })
      .catch((err) => console.error(err));
  }
}
