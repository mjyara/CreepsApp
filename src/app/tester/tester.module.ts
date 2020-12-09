import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { FormsModule } from "@angular/forms";

import { IonicModule } from "@ionic/angular";

import { TesterPageRoutingModule } from "./tester-routing.module";

import { TesterPage } from "./tester.page";

import { SizeformatpipePipe } from "./sizeformatpipe.pipe";

@NgModule({
  imports: [CommonModule, FormsModule, IonicModule, TesterPageRoutingModule],
  declarations: [TesterPage, SizeformatpipePipe],
})
export class TesterPageModule {}
