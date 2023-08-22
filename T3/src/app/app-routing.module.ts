import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { RegistrationComponent } from './registration/registration.component';
import { AddEmployeesComponent } from './add-employees/add-employees.component';
import { UpdateEmployeesComponent } from './update-employees/update-employees.component';
import { CreateAdminComponent } from './create-admin/create-admin.component';


const routes: Routes = [
{path:'', component: HomeComponent},
  {path:'Login', component: LoginComponent},
  {path:'Registration', component: RegistrationComponent},
{path:'AddEmployees', component: AddEmployeesComponent},
{path:'UpdateEmployees/:id', component: UpdateEmployeesComponent},
{path:'createadmin', component: CreateAdminComponent},
  

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
