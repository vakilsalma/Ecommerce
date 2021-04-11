import { Component, OnInit } from '@angular/core';
import { DataService } from './data.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent{
  title = 'watchwatch';
  scroll(el: HTMLElement) {
    el.scrollIntoView();
  }
    
  }
  
  // product_pass:any;
  // prod_pass_method($event){
  //   this.product_pass = $event;
  // }


