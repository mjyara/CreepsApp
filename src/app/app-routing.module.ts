import { NgModule } from "@angular/core";
import { PreloadAllModules, RouterModule, Routes } from "@angular/router";

const routes: Routes = [
  {
    path: "",
    redirectTo: "home/main",
    pathMatch: "full",
  },
  {
    path: "home",
    loadChildren: () =>
      import("./home/home.module").then((m) => m.HomePageModule),
  },
  {
    path: "login",
    loadChildren: () =>
      import("./auth/login/login.module").then((m) => m.LoginPageModule),
  },
  {
    path: "add",
    loadChildren: () =>
      import("./auth/add/add.module").then((m) => m.AddPageModule),
  },
  {
    path: "profile",
    loadChildren: () =>
      import("./profile/profile.module").then((m) => m.ProfilePageModule),
  },
  {
    path: "main",
    loadChildren: () =>
      import("./main/main.module").then((m) => m.MainPageModule),
  },
  {
    path: "test",
    loadChildren: () =>
      import("./test/test.module").then((m) => m.TestPageModule),
  },
  {
    path: "userwallet",
    loadChildren: () =>
      import("./userwallet/userwallet.module").then(
        (m) => m.UserwalletPageModule
      ),
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules }),
  ],
  exports: [RouterModule],
})
export class AppRoutingModule {}
