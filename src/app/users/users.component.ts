import { Component, OnInit } from '@angular/core';
import {UserService} from "./user.service";
import {UserModel} from "./user.model";

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss']
})
export class UsersComponent implements OnInit {
  userList:UserModel.Datum[];
  ascList;
  sortIconHide = 'asc';
  constructor(private userService:UserService) { }

  ngOnInit() {
      this.userService.getUsers().subscribe(res=>{
      this.userList = res.data;
      this.ascList = res.data.sort((a, b) =>
        new Date(a.createdAt).getTime() -
        new Date(b.createdAt).getTime());
    });
  }

  getAscending(){
    this.userList = this.ascList.sort((a, b) =>
      new Date(b.createdAt).getTime() -
      new Date(a.createdAt).getTime());
    this.sortIconHide = 'dsc';
  }

  getDescending(){
    this.userList = this.ascList.sort((a, b) =>
      new Date(a.createdAt).getTime() -
      new Date(b.createdAt).getTime());
    this.sortIconHide = 'asc';
  }

}
