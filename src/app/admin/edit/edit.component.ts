import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ProductsService } from 'src/app/products.service';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css'],
})
export class EditComponent implements OnInit {
  form: FormGroup;
  id: number;

  constructor(
    private formBuilder: FormBuilder,
    private productService: ProductsService,
    private route: ActivatedRoute,
    private router: Router
  ) {
    this.form = this.formBuilder.group({
      name: '',
      price: '',
      image: '',
    });
    this.id = this.route.snapshot.params.id;
    console.log(this.id);
    this.productService.get(this.id).subscribe(product=>this.form.patchValue(product));
  }

  ngOnInit(): void {}

  submit(): void {
   this.productService.update(this.id, this.form.getRawValue()).subscribe(
     ()=>{
       this.router.navigateByUrl('admin/products');
     }
   )
  }
}
