import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import {RouterOutlet} from "@angular/router";
import {AppRoutingModule} from "./app-routing.module";
import {HttpClientModule} from "@angular/common/http"
import {HttpClientInMemoryWebApiModule} from "angular-in-memory-web-api";
import {InMemoryDataServiceService} from "./api/in-memory-data-service.service";
import {NgxPaginationModule} from "ngx-pagination";
import {BsDropdownModule} from "ngx-bootstrap/dropdown";
import {AnimationBuilder} from "@angular/animations";
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";

// @ts-ignore
@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    RouterOutlet,
    BrowserAnimationsModule,
    AppRoutingModule,
    HttpClientModule,
    HttpClientInMemoryWebApiModule.forRoot(InMemoryDataServiceService, {dataEncapsulation: false}),
    NgxPaginationModule,
    BsDropdownModule,
  ],
  providers: [],
  exports: [ ],
  bootstrap: [AppComponent]
})
export class AppModule { }
