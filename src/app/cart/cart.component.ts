import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})

export class CartComponent implements OnInit {
 public cartitems;
//  public total_;
//  public cartcount;
  constructor(public dataservice:DataService) {
    this.cartitems = this.dataservice.getcartitems();
    // this.total_=this.dataservice.gettotal();
    // this.cartcount=this.dataservice.prodcount();

   }
  remove(ID,prod_Id){
    let index = this.dataservice.cart.findIndex( item => item.id == ID );
    this.dataservice.update_prod(prod_Id,index);
    this.dataservice.cart.splice(index,1);
    localStorage.removeItem("cart_ls");
    localStorage.setItem("cart_ls", JSON.stringify(this.dataservice.cart));
    this.dataservice.returntotal(this.dataservice.cart);
  }

  ngOnInit(): void {

  }

}
