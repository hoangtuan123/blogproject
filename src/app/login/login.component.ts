import { Component, Input, OnInit } from '@angular/core';

import { User } from '../models/user';

import { LogonService } from '../services/logon.servive';
import { Location } from '@angular/common';
import { Router } from '@angular/router';



@Component({
  selector: 'my-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})

export class LoginComponent implements OnInit {
  
  @Input () user:User ={
      username:'',
      password:''
  };
  constructor(
    private logonService:LogonService,
    private location:Location, 
    private router:Router) { 
     
  }
  Logon():void{
    let item = null;
    this.logonService.getUser(this.user.username,this.user.password)
    .subscribe(data => {
      var headers = data.headers;
      localStorage.setItem('token', headers.get('token'));
      localStorage.setItem('currentUser', this.user.username)
      this.router.navigate(["/dashboard"]);
    },error => {
      console.log(error);
    });
  }
  ngOnInit():void{
    localStorage.clear();
  }
}
