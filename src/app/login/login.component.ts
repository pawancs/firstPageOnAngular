import { Component, OnInit } from '@angular/core';
import { TestService } from '../service/test.service';
import {Router} from '@angular/router';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private service:TestService, private router:Router) { 

  }

  ngOnInit() {

    let accessToken = sessionStorage.getItem('accessToken');
    if(accessToken)
    this.router.navigate(['/customer']);

  }
  isError:boolean=false;
  error:string='';

  register(){
    this.isError=false;
    this.error='';
    // this.service.getListOfCustomer().subscribe(t=> {
    //   console.log(t);
    // })
    this.service.register().subscribe(result => {
      console.log(result);
    },
    err =>{
      this.isError=true;
      var x = err.error.ModelState;
      var val=Object.keys(x).map(function(key) {
        return x[key];
        });
     this.error=val.toString();
    })

  }

  submit(f){
    this.service.getToken(f.value).subscribe(result => {
      sessionStorage.setItem('accessToken', result.access_token);
      this.router.navigate(['/customer']);
      console.log(result);
    },
    err =>{
      this.isError=true;
      this.error= err.error.error_description;
      console.log(err);
    console.log(f.value);
  });
}



  getCustomer(){
    this.service.getListOfCustomer().subscribe(result => console.log(result));
  }

  getToken(){
    // this.service.getListOfCustomer().subscribe(t=> {
    //   console.log(t);
    // })

  let f={userName: 'Pawan' , password : 'Pawan@123'};

    this.service.getToken(f).subscribe(result => {
      console.log(result);
    },
    err =>{
      console.log(err);
    //   this.isError=true;
    //   var x = err.error.ModelState;
    //   var val=Object.keys(x).map(function(key) {
    //     return x[key];
    //     });
    //  this.error=val.toString();
    })

  }



}
