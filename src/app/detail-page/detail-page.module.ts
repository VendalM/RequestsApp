import { NgModule } from '@angular/core';
import {CommonModule} from "@angular/common";
import {FormsModule} from "@angular/forms";
import {NgxPaginationModule} from "ngx-pagination";
import {DetailPageComponent} from "./detail-page.component";
import {DetailPageRoutingModule} from "./detail-page-routing.module";
import {ActivatedRoute} from "@angular/router";

@NgModule({
  declarations: [DetailPageComponent],
  imports: [DetailPageRoutingModule, CommonModule, FormsModule, NgxPaginationModule],
  providers: [],
  bootstrap: [DetailPageComponent]
})
export class DetailPageModule {


}
