import { Component, OnInit } from '@angular/core';
import { CommonService } from '../common.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent  implements OnInit{

alert:boolean=false;
email!:string;
password!:string;


  constructor(private T3:CommonService, private router: Router){}

ngOnInit(): void {
  
}
logIn(){
  if(this.email == "Mawadh@itec.edu.om" && this.password == "123")
{
  this.router.navigate(['../Registration'])
}
else{
  alert("Please enter valid email & password");
}
 // console.log(this.email)
}
}
