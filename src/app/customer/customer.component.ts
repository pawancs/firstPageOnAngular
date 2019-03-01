import { Component, OnInit } from '@angular/core';
import { Product } from '../product';
import { TestService } from '../service/test.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-customer',
  templateUrl: './customer.component.html',
  styleUrls: ['./customer.component.css']
})
export class CustomerComponent implements OnInit {

  product:Product = new Product();
  constructor(private service:TestService, private router:Router) { }

  ngOnInit() {
     this.getCustomer();
  }
  customers:any[] =[];
  getCustomer(){
   this.service.getListOfCustomer().subscribe(result =>this.customers = result);
  }

  LogOut(){
    this.service.logOut().subscribe(result =>{
      sessionStorage.removeItem('accessToken');
      this.router.navigate(['/login']);
    },
    (err)=>{
      if(err.status === 401)
      alert(err.error.Message);
      sessionStorage.removeItem('accessToken');
      this.router.navigate(['/login']);
    })
  }

  submit(){
    console.log('submit fires');
  }

}
