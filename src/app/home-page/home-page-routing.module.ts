import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {HomePageComponent} from "./home-page.component";

const  routers: Routes = [
  {
    path: '',
    component: HomePageComponent,
  }
];

@NgModule({
  imports: [RouterModule.forChild(routers)],
  exports: [RouterModule]
})
export class HomePageRoutingModule { }
