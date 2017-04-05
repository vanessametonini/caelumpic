import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { FotoModule } from './foto/foto.module'

import 'rxjs/add/operator/map';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    FotoModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
