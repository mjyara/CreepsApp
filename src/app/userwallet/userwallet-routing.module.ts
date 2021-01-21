import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { UserwalletPage } from './userwallet.page';

const routes: Routes = [
  {
    path: '',
    component: UserwalletPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class UserwalletPageRoutingModule {}
