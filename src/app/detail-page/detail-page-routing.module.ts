import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {DetailPageComponent} from "./detail-page.component";

const  routers: Routes = [
  {
    path: '',
    component: DetailPageComponent,
  }
];

@NgModule({
  imports: [RouterModule.forChild(routers)],
  exports: [RouterModule]
})
export class DetailPageRoutingModule { }
