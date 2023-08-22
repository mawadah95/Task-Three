import { Component, OnInit } from '@angular/core';
import { CommonService } from '../common.service';
import { FormControl, FormGroup } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-update-employees',
  templateUrl: './update-employees.component.html',
  styleUrls: ['./update-employees.component.css']
})
export class UpdateEmployeesComponent implements OnInit {

  alert:boolean=false;
  updateemployees = new FormGroup({
    name: new FormControl(''),
    address: new FormControl(''),
    email: new FormControl('')
  })
  constructor(private T3:CommonService, private router:ActivatedRoute) {}
 
  ngOnInit(): void {
  console.log(this.router.snapshot.params['id'])
  this.T3.getCurrentData(this.router.snapshot.params['id']).subscribe((result)=>{
  
    this.updateemployees = new FormGroup({
      name: new FormControl(result=''),
      //name: new FormControl(result['name']), this commend is not working
      address: new FormControl(result=''),
      email: new FormControl(result='')
     
    })
  })
  
  }
  updateemp(){
  this.T3.updateemp(this.router.snapshot.params['id'], 
  this.updateemployees.value).subscribe((result)=>{
  console.log(result," data updated successfully")
 this.alert=true;
 } )
}

CloseAlert(){
  this.alert=false;
 }
}

