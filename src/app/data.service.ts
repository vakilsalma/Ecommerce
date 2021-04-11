import { Injectable} from '@angular/core';



@Injectable({
  providedIn: 'root'
})
export class DataService {
  total=0;
  products=[];
  cart=[];
  cartcount=0;
  add_prod(product) {
    this.products.push(product);
    localStorage.setItem("prod_ls", JSON.stringify(this.products));
  }
  update_prod(prod_Id,index){
    this.products[prod_Id].quantity=parseInt(this.products[prod_Id].quantity)+parseInt(this.cart[index].quantity);
    localStorage.setItem("prod_ls", JSON.stringify(this.products));
  }

  getItems() {
    if(this.getItemsls()!=null){
      this.products=this.getItemsls();
      }
    return this.products;
  }
  getItemsls(){
    return JSON.parse(localStorage.getItem("prod_ls"));
  }
  addtocart(cartitem){
    this.cart.push(cartitem);
    this.returntotal(this.cart);
    localStorage.setItem("cart_ls", JSON.stringify(this.cart));
    localStorage.setItem("prod_ls", JSON.stringify(this.products));
    }

  returntotal(cart){
    this.total=0;
    localStorage.setItem("total_ls", JSON.stringify(this.total));
    if(cart.length!=0){
    this.total=0;
    cart.forEach( cartprod => {
    this.total = this.total+cartprod.price;
  });
    localStorage.setItem("total_ls", JSON.stringify(this.total));
    this.gettotal();
    this.prodcount();
  }
  }

  gettotal(){
    if(JSON.parse(localStorage.getItem("total_ls"))!=null){
    this.total=parseInt(JSON.parse(localStorage.getItem("total_ls")));
    }
    return this.total;
    
  }
  prodcount(){
  this.cartcount=this.cart.length;
  return this.cartcount;
  }

  getcartitems(){
    if(this.getcartitemsls()!=null){
      this.cart=this.getcartitemsls();
      }
    return this.cart;
  }
  getcartitemsls(){
    return JSON.parse(localStorage.getItem('cart_ls'));
  }
  changeval(Id,index1,cartquantity1){
    this.products[Id].quantity=this.products[Id].quantity-cartquantity1;
    localStorage.setItem("prod_ls", JSON.stringify(this.products));
    this.cart[index1].quantity=parseInt(this.cart[index1].quantity)+parseInt(cartquantity1);
    this.cart[index1].price=parseInt(this.cart[index1].quantity)*parseInt(this.products[Id].price);
    localStorage.setItem("cart_ls", JSON.stringify(this.cart));
    this.returntotal(this.cart);
  }
  

  constructor() {
}
}