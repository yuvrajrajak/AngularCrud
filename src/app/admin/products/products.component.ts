import { Component, OnInit } from '@angular/core';
import { Product } from 'src/app/interface/product';
import { ProductsService } from 'src/app/products.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {
  
  products: Product[] =[];
  
  constructor(private productsService: ProductsService) { }

  ngOnInit(): void {
   this.productsService.all().subscribe(
  (product)=>{
    this.products = product;
  }
   )
  }
  

  onDelete(id:number){
    this.productsService.delete(id).subscribe(
     ()=>{
       this.products = this.products.filter(p=>p.id !== id);
     } 
    )
  }
}
