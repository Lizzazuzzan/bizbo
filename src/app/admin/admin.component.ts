import { Component, OnInit } from '@angular/core';
import {ApiService} from '../../services/api.service';
import { Router} from '@angular/router';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {
  

  username: string;
  password: string;

  constructor(private apiService:ApiService , private router: Router) { }

  ngOnInit() {
  }
  onLoginSubmit(){
    console.log(this.username);
     const user ={
       username: this.username,
      password: this. password
    }
  }
}


