import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {
    path: '', pathMatch: 'full', loadChildren: './features/landing/landing.module#LandingModule'
  },
  {
    path: 'festivals', loadChildren: './features/festivals/festivals.module#FestivalsModule'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
