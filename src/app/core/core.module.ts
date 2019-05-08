import { NgModule } from '@angular/core';

import { SharedModule } from '../shared/shared.module';
import { AppComponent } from './components/root/app.component';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    SharedModule,
    HttpClientModule
  ],
  exports: [AppComponent]
})
export class CoreModule { }
