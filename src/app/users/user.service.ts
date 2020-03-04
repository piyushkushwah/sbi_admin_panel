import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {UserModel} from "./user.model";

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http:HttpClient) { }

  getUsers(){
    const url = localStorage.getItem('BaseUrl') + `/apis/queries/?status=1`;
    return this.http.get<UserModel.RootObject>(url);
  }

}
