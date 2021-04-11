import { Component, OnInit, Output, Input, EventEmitter } from '@angular/core';
import { NgForm } from '@angular/forms';
import { DataService } from '../data.service';



@Component({
  selector: 'app-add-prod',
  templateUrl: './add-prod.component.html',
  styleUrls: ['./add-prod.component.css']
})
export class AddProdComponent implements OnInit {

  constructor(private dataservice:DataService) {
    
   }

  
  products_() {
    return {
    id:null,
    name:"",
    desc:"",
    quantity:null,
    price:null,
    image:"",
    };
  };
  public product=null;

  url="";
  onSelectFile(event) { 
      if (event.target.files && event.target.files[0]) {
        var reader = new FileReader();

        reader.readAsDataURL(event.target.files[0]); 

        reader.onload = (event:any) => { 
          this.url = event.target.result;
        }
      }
  }

add_prod(addProd:NgForm,prod){
  this.product=this.products_();
  this.product.id=this.dataservice.products.length;
  this.product.name=prod.name;
  this.product.desc=prod.desc;
  this.product.price=prod.price;
  this.product.quantity=prod.quantity;
  this.product.image=this.url;
  this.dataservice.add_prod(this.product);
  addProd.reset();  
}



  ngOnInit(): void {
    
    }

}

