import { Component, OnInit } from "@angular/core";
import { AngularFireAuth } from "@angular/fire/auth";
import { AngularFirestore } from "@angular/fire/firestore";
import firebase from "firebase";
import { environment } from "src/environments/environment";

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
  constructor(public firebaseAuth: AngularFireAuth) {}
  ngOnInit() {
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
        alert("Phone number already exists!");
        return;
      }
    }

    this.firestore
      .collection("users")
      .add({ uid: user.uid, phoneNumber: user.phoneNumber })
      .then(() => {
        alert("Registration successful!");
      })
      .catch((err) => console.error(err));
  }
}
