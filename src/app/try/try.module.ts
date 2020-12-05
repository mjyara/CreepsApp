import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { TryPageRoutingModule } from './try-routing.module';

import { TryPage } from './try.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    TryPageRoutingModule
  ],
  declarations: [TryPage]
})
export class TryPageModule {}
