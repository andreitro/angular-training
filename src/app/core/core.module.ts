import { NgModule } from '@angular/core';

import { SharedModule } from '../shared/shared.module';
import { AppComponent } from './components/root/app.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    SharedModule
  ],
  exports: [AppComponent]
})
export class CoreModule { }
