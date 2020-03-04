import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {Router} from "@angular/router";
import {LoginService} from "./login.service";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  loginForm = new FormGroup({
    email:new FormControl('',[Validators.required,Validators.email]),
    password:new FormControl('',[Validators.required,Validators.minLength(4)])
  });
  submit = false;
  constructor(private loginService:LoginService,
              private route:Router) { }

  ngOnInit() {
    if(localStorage.getItem('token')){
      this.route.navigateByUrl('/');
    }
  }

  onSubmit(){
    this.submit = true;
    if(!this.loginForm.valid){
      return;
    }
    this.loginService.loginObj = this.loginForm.value;
    this.loginService.getLoggedIn().subscribe(res=>{
      console.log(localStorage.getItem('BaseUrl'));
      console.log(res);
      if(res.success===1){
        const date = new Date();
        date.setDate(date.getDate() + 1);
        localStorage.setItem('expireTime', `${date}`);
        localStorage.setItem('token',res.data.token);
        this.route.navigateByUrl('/');
      }else{
        alert('Enter Valid Details');
      }
    });
  }
}
