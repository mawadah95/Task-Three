
import { Component, OnInit } from '@angular/core';
import { CommonService } from '../common.service';



@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent implements OnInit {
  public collection:any;

  alert:boolean=false;
  
  constructor(private CommonService: CommonService ){ }

ngOnInit(): void{
this.CommonService.getemplist().subscribe((result)=>{
  this.collection=result;
  console.log(this.collection)
});
}
deleteemp(id:any)
{
this.CommonService.deleteemp(id).subscribe((result)=>{
  console.warn("result", result)
  console.log(result," data updated successfully")
  this.alert=true;
  
})
}
CloseAlert(){
  this.alert=false;
 }

}
