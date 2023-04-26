import { Component, OnInit } from '@angular/core';
import { FormGroup,FormControl,Validators } from '@angular/forms';
import { AuthService } from 'src/app/shared/services/auth.service';

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.css']
})
export class SignInComponent implements OnInit {
  constructor(public authService : AuthService){}
   
  register = new FormGroup({
    name:new FormControl(),
    password:new FormControl(),
    email:new FormControl()
  });


  ngOnInit(){}

}
