import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RdCoreModule } from '@rd/core';

import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    RdCoreModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
