import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class CommonService {

URL= "http://localhost:3000/T3"
regURL="http://localhost:3000/admins"
 constructor(private _http:HttpClient) { }
 getemplist()
 {return this._http.get(this.URL);}

 addemp(data:any){
  return this._http.post(this.URL, data);
 }
 deleteemp(id:any){
  return this._http.delete(`${this.URL}/${id}`)
 }
 getCurrentData(id:any){
  return this._http.get(`${this.URL}/${id}`)
 }
 updateemp(id:any, data:any){
  return this._http.put(`${this.URL}/${id}`,data)
 }

 Createadmin(data:any){
  return this._http.post(this.regURL,data);
 }
}
