import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthGuardService implements CanActivate {

  constructor(private router:Router) { }

  canActivate(){
   // this.router.navigate(['login']);
   let authToken = sessionStorage.getItem('accessToken');
   if(authToken)
    return true;
    else{
      this.router.navigate(['/login']);
    return false;
    }

  }
  
}
