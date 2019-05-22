import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";

const routes: Routes = [
  {
    path: "festivals",
    loadChildren: "./features/festivals/festivals.module#FestivalsModule"
  },
  {
    path: "",
    pathMatch: "full",
    loadChildren: "./features/landing/landing.module#LandingModule"
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
