import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { FestivalsListPageComponent } from './pages/festivals-list-page/festivals-list-page.component';

const routes: Routes = [{
  path: '', component: FestivalsListPageComponent
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class FestivalsRoutingModule { }
