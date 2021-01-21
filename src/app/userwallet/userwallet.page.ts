import { Component, OnInit } from "@angular/core";
import { PopoverController } from "@ionic/angular";
import { PopusersettingComponent } from "./././popusersetting/popusersetting.component";
@Component({
  selector: "app-userwallet",
  templateUrl: "./userwallet.page.html",
  styleUrls: ["./userwallet.page.scss"],
})
export class UserwalletPage implements OnInit {
  constructor(public popoverController: PopoverController) {}

  ngOnInit() {}

  async presentPopover(ev: any) {
    const popover = await this.popoverController.create({
      component: PopusersettingComponent,
      cssClass: "my-custom-class",
      event: ev,
      translucent: true,
    });
    return await popover.present();
  }
}
