import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";

import { HomePage } from "./home.page";

const routes: Routes = [
  {
    path: "",
    component: HomePage,
    children: [
      {
        path: "shop",
        loadChildren: () =>
          import("./../profile/profile.module").then(
            (m) => m.ProfilePageModule
          ),
      },

      {
        path: "matches",
        loadChildren: () =>
          import("./../profile/profile.module").then(
            (m) => m.ProfilePageModule
          ),
      },
      {
        path: "main",
        loadChildren: () =>
          import("./../main/main.module").then((m) => m.MainPageModule),
      },
      {
        path: "",
        redirectTo: "home/main",
        pathMatch: "full",
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class HomePageRoutingModule {}
