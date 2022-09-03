import { NgModule } from '@angular/core';
import { HttpClientModule } from "@angular/common/http"
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PageListComponent } from './page-list/page-list.component';
import { PageCardComponent } from './page-card/page-card.component';
import { FormsModule } from '@angular/forms';
import { ListService } from './sevices/list.service';

@NgModule({
  declarations: [
    AppComponent,
    PageListComponent,
    PageCardComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
  ],
  providers: [ListService],
  bootstrap: [AppComponent]
})
export class AppModule { }
