import { NgModule } from '@angular/core';
import { Routes, RouterModule} from '@angular/router';
import { LoginComponent } from './login/login.component';
import { RegistrationComponent } from './registration/registration.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { CustomerComponent } from './customer/customer.component';
import { AuthGuardService } from './service/auth-guard.service';

const routes: Routes = [
  {path: 'login', component:LoginComponent},
  {path:'registration', component:RegistrationComponent},
  { path:'dashboard' , component:DashboardComponent},
  { path:'customer' , component:CustomerComponent, canActivate :[AuthGuardService]},
  {path:'', redirectTo:"/login", pathMatch:"full" }
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
