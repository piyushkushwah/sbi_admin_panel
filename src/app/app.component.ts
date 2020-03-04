import {Component, OnInit} from '@angular/core';
import {Router} from "@angular/router";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{
  title = 'SBIAdmin';
  constructor(private router:Router) {
    localStorage.setItem('BaseUrl','https://shivbhairavinfrastructures.com')
  }

  ngOnInit(): void {
    const currTime = new Date();
    console.log(currTime >= new Date(localStorage.getItem('expireTime')));
    if(currTime >= new Date(localStorage.getItem('expireTime'))){
      localStorage.removeItem('token');
      this.router.navigateByUrl('/login');
    }
  }

}
