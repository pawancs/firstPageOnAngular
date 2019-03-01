import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import { Product } from '../product';
@Injectable({
  providedIn: 'root'
})
export class TestService {

  //url="http://localhost:59555/api/customer";
  url="http://localhost:63198/api/Customer";
  constructor(private http:HttpClient) {

   }

   register(){
     let cust={
      "username": "Pawan",
      "password" : "Pawan@123",
      "grant_type": "password"
    };

     let cust2={
      "username": "Chandu",
      "password" : "Chandu@123",
      "ConfirmPassword": "Chandu@123"
     };
     return this.http.post<any>('http://localhost:63198/api/account/register', cust2)
   }

   getToken(userDetail:any){
    var userData = "username=" + userDetail.userName + "&password=" + userDetail.password + "&grant_type=password";
    // var reqHeader = new HttpHeaders({ 'Content-Type': 'application/x-www-form-urlencoded','No-Auth':'True' });
   // var reqHeader = new HttpHeaders({ 'Content-Type': 'application/x-www-form-urlencoded'});
    let cust={
      "username": "Pawan",
      "password" : "Pawan@123",
      "grant_type": "password"
    };
    return this.http.post<any>('http://localhost:63198/token', userData);

   }

  getListOfCustomer(){
    var authKey = sessionStorage.getItem('accessToken');
    console.log('auth' ,authKey);
    var reqHeader = new HttpHeaders({ 'Content-Type': 'application/json','Authorization':'Bearer ' + authKey });
    return this.http.get<any>(`${this.url}` , {headers: reqHeader});
  }

  insertCustomer(customer:Product){
      return this.http.post<any>(`${this.url}`,customer);
  }

  logOut(){
    var authKey = sessionStorage.getItem('accessToken');
    console.log('logout', authKey);
    var reqHeader = new HttpHeaders({ 'Content-Type': 'application/json','Authorization':'Bearer ' + authKey });
    return this.http.post<any>(`http://localhost:63198/api/Account/LogOut`, null , {headers: reqHeader});
  }

}
