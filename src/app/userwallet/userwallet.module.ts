import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { UserwalletPageRoutingModule } from './userwallet-routing.module';

import { UserwalletPage } from './userwallet.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    UserwalletPageRoutingModule
  ],
  declarations: [UserwalletPage]
})
export class UserwalletPageModule {}
