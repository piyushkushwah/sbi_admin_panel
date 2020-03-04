import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {LoginComponent} from "./login/login.component";
import {UsersComponent} from "./users/users.component";
import {AuthGaurdService} from "./auth-gaurd.service";

const routes: Routes = [
  {
    path:'login',component:LoginComponent
  },
  {
    path:'',component:UsersComponent,canActivate:[AuthGaurdService]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
