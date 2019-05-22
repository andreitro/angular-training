import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { FestivalsListPageComponent } from './pages/festivals-list-page/festivals-list-page.component';
import { CreateFestivalPageComponent } from './pages/create-festival-page/create-festival-page.component';

const routes: Routes = [
  {
    path: 'create',
    component: CreateFestivalPageComponent
  },
  {
    path: '',
    component: FestivalsListPageComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class FestivalsRoutingModule {}
