import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { CommonService } from '../common.service';

@Component({
  selector: 'app-create-admin',
  templateUrl: './create-admin.component.html',
  styleUrls: ['./create-admin.component.css']
})
export class CreateAdminComponent implements OnInit {
  
  alert:boolean=false;
  Createadmin = new FormGroup({
    name: new FormControl(''),
    password: new FormControl(''),
    email: new FormControl('')
  })
  
  constructor(private T3:CommonService) {}
  ngOnInit(): void {
   
  }
  Create_admin(){
    console.log(this.Createadmin.value);
    this.T3.Createadmin(this.Createadmin.value).subscribe((result)=>{
      console.log(result,"data is created successfully")

    })
  }

}
