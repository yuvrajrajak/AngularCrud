import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ProductsService } from 'src/app/products.service';

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.css'],
})
export class CreateComponent implements OnInit {
  name = '';
  price = '';
  image = '';

  constructor(
    private productsService: ProductsService,
    private router: Router
  ) {}

  ngOnInit(): void {}

  submit(): void {
    const data = {
      name: this.name,
      price: this.price,
      image: this.image,
    };

    this.productsService.create(data).subscribe(() => {
      this.router.navigateByUrl('/admin/products');
    });
  }
}
