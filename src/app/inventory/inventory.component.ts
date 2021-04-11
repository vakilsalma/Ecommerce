import { Component, OnInit, Input } from '@angular/core';
import { DataService } from '../data.service';


@Component({
  selector: 'app-inventory',
  templateUrl: './inventory.component.html',
  styleUrls: ['./inventory.component.css']
})
export class InventoryComponent implements OnInit {
  // @Input() received_prod: any [];
  
  cartitem_() {
    return {
      id:null,
      prod_id:null,
      name:"",
      desc:"",
      quantity:null,
      price:null,
      image:"",
    };
  };
 

  present(Id){
    var someid;
    this.dataservice.cart.forEach(function (value) {
        if(value.prod_id==Id)
        {
          someid=Id;
        }
          }); 
          return someid;
  }
  public cartitem=null;
  products = this.dataservice.getItems();
  public exists:boolean=false;

  
addtocart(Id,cartquantity){
  if(this.dataservice.products[Id].quantity<cartquantity || this.dataservice.products[Id].quantity<=0){
    alert("Item out of stock!");
  }
  else if(this.present(Id)==Id){
    let index = this.dataservice.cart.findIndex( item => item.prod_id == Id );
    this.dataservice.changeval(Id,index,cartquantity);
  }
  else{
 this.cartitem=this.cartitem_();
  this.cartitem.prod_id=Id;
  this.cartitem.id=this.dataservice.cart.length+1;
  this.cartitem.image=this.dataservice.products[Id].image;
  this.cartitem.name=this.dataservice.products[Id].name;
  this.cartitem.desc=this.dataservice.products[Id].desc;
  this.cartitem.price=this.dataservice.products[Id].price*cartquantity;
  this.cartitem.quantity=cartquantity;
  this.dataservice.products[Id].quantity=this.dataservice.products[Id].quantity-cartquantity;
  this.dataservice.addtocart(this.cartitem);
  }
}

  constructor(private dataservice:DataService) { 
    // this.products = this.dataservice.getItems();
  }

  ngOnInit(): void {

  }
  

}
