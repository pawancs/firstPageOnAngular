import { Component } from '@angular/core';
import { TestService } from './service/test.service';
import { Product } from './product';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  customers:any[]=[];
  product:Product = new Product();
   constructor(public testService:TestService) {
        // this.product.Id=0;
        // this.product.FirstName='';
        // this.product.LastName='';
        // this.product.Email='';
        // this.product.City='';
        // this.testService.getListOfCustomer().subscribe(result=>{
        //   this.customers = result;
        // },
        // err=>{
        //    console.log(err);
        // })
     }
  title = 'AngularProjectDemo';

  Update(cust:Product){
         let index = this.customers.indexOf(cust); 
         this.product= this.customers[index];    
  }
  submit(){
    this.testService.insertCustomer(this.product).subscribe(result=>{
         this.customers.push(result);
         this.product = new Product();
    },
    err=>{
      console.log(err);
    })
  }

  Delete(cust:Product){
    let index = this.customers.indexOf(cust); 
    this.customers =this.customers.slice(index,1);
  }
}
