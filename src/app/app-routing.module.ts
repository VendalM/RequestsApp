import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const  routers: Routes = [
  {
    path: '',
    children: [
      {
        path: 'home',
        loadChildren: () => import('./home-page/home-page.module').then(m => m.HomePageModule)
      },
      {
        path: 'detail-page',
        loadChildren: () => import('./detail-page/detail-page.module').then(m => m.DetailPageModule)
      },
      {path: '', redirectTo: 'home', pathMatch: 'full'},
      {path: '**', redirectTo: 'home'},
    ]
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routers)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
