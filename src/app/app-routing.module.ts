import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {NotfoundComponent} from './not-found/notfound.component';
import {HomeComponent} from './navigatecomponent/home/home.component';
import {NewsDetailsComponent} from './navigatecomponent/news-details/news-details.component';
import {DepartmentComponent} from './navigatecomponent/department/department.component';
const routes: Routes = [
  {path:'not-found',component:NotfoundComponent},
  {path:'home',component:HomeComponent},
  {path:'department/:id',component:DepartmentComponent},
  {path:'news-details/:id',component:NewsDetailsComponent},
  {path:'',component:HomeComponent},
  {path:'**',component:NotfoundComponent} 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
