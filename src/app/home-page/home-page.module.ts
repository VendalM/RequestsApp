import { NgModule } from '@angular/core';
import {HomePageComponent} from "./home-page.component";
import {HomePageRoutingModule} from "./home-page-routing.module";
import {CommonModule} from "@angular/common";
import {FormsModule} from "@angular/forms";
import {NgxPaginationModule} from "ngx-pagination";
import {BsDropdownModule} from "ngx-bootstrap/dropdown";
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";

@NgModule({
  declarations: [
    HomePageComponent,
  ],
  imports: [HomePageRoutingModule, CommonModule, FormsModule, NgxPaginationModule, BsDropdownModule],
  providers: [],
  bootstrap: [HomePageComponent]
})
export class HomePageModule { }
