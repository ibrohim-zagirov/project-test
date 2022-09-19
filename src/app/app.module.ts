import { NgModule } from '@angular/core';
import { HttpClientModule } from "@angular/common/http"
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PageListComponent } from './page-list/page-list.component';
import { PageCardComponent } from './page-card/page-card.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ListService } from './sevices/list.service';
import { SearchPipe } from './pipe/search.pipe';
import { ClickOutsidedirective } from './directive/clickOutside.directive';

@NgModule({
  declarations: [
    AppComponent,
    PageListComponent,
    PageCardComponent,
    SearchPipe,
    ClickOutsidedirective

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
  ],
  providers: [ListService],
  bootstrap: [AppComponent]
})
export class AppModule { }
