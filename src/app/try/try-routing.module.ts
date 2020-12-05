import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TryPage } from './try.page';

const routes: Routes = [
  {
    path: '',
    component: TryPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TryPageRoutingModule {}
