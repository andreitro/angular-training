import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';


import { SharedModule } from 'src/app/shared/shared.module';
import { FestivalDetailsPageComponent } from './pages/festival-details-page/festival-details-page.component';
import { FestivalsRoutingModule } from './festivals-routing.module';
import { FestivalService } from '../services/festival.service';
import { FestivalListItemComponent } from './components/festival-list-item/festival-list-item.component';
import { FestivalsListPageComponent } from './pages/festivals-list-page/festivals-list-page.component';
import { FestivalFormComponent } from './pages/festival-form/festival-form.component';

@NgModule({
  declarations: [FestivalsListPageComponent, FestivalDetailsPageComponent, FestivalListItemComponent, FestivalFormComponent],
  imports: [
    SharedModule,
    FestivalsRoutingModule,
    FormsModule
  ],
  providers:[FestivalService]
})
export class FestivalsModule { }
