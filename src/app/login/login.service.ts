import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {LoginModel} from "./login.model";

@Injectable({
  providedIn: 'root'
})
export class LoginService {
  loginObj;
  constructor(private http:HttpClient) { }

  getLoggedIn(){
    const url = localStorage.getItem('BaseUrl') + `/apis/users/authenticate`;
    return this.http.post<LoginModel.RootObject>(url,this.loginObj);
  }

}
