import { Component, OnInit } from '@angular/core';
import { CommonService } from '../common.service';
import { FormControl, FormGroup } from '@angular/forms';
@Component({
  selector: 'app-add-employees',
  templateUrl: './add-employees.component.html',
  styleUrls: ['./add-employees.component.css']
})
export class AddEmployeesComponent implements OnInit {
  alert:boolean=false;
  addemployees = new FormGroup({
    name: new FormControl(''),
    address: new FormControl(''),
    email: new FormControl('')
  })
constructor(private T3:CommonService) {}

ngOnInit(): void {
  
}
createEmp(){
 // console.log(this.addemployees.value);
 this.T3.addemp(this.addemployees.value).subscribe((result)=>{
  this.alert=true;
  this.addemployees.reset({});
  console.log("Get Data Form Service", result)
 })
}
CloseAlert(){
  this.alert=false;
}
}
