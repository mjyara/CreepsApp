import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";
import { MenuController } from "@ionic/angular";

@Component({
  selector: "app-home",
  templateUrl: "./home.page.html",
  styleUrls: ["./home.page.scss"],
})
export class HomePage implements OnInit {
  constructor(private menu: MenuController, public router: Router) {}

  ngOnInit() {}

  openFirst() {
    this.menu.enable(true, "first");
    this.menu.open("first");
  }

  AddAcc() {
    this.router.navigateByUrl("/add");
  }
}
