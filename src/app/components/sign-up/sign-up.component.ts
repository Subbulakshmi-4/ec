import { Component, OnInit } from '@angular/core';
import { FormGroup,FormControl } from '@angular/forms';
import { AuthService } from 'src/app/shared/services/auth.service';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css']
})
export class SignUpComponent implements OnInit {

  constructor (public authService:AuthService){}

  register = new FormGroup({
    email:new FormControl(),
    password:new FormControl()
  });

  ngOnInit(){
    
  }
}
