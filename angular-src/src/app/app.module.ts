import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { AddListComponent } from './add-list/add-list.component';

import { ListService } from './services/list.service';

@NgModule({
  declarations: [
    AppComponent,
    AddListComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [ListService],
  bootstrap: [AppComponent]
})
export class AppModule { }
