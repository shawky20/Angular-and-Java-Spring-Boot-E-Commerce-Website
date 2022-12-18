import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Product } from 'src/app/common/product';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: "app-products-details",
  templateUrl: "./products-details.component.html",
  styleUrls: ["./products-details.component.css"],
})
export class ProductsDetailsComponent implements OnInit {
  product!: Product;

  constructor(
    private productService: ProductService,
    private route: ActivatedRoute
  ) {}
  // ! what is the difference between Activroute and Router

  ngOnInit() {
    this.route.paramMap.subscribe(() => {
      this.handleProductDetails();
    });
  }

  handleProductDetails(){

    const productId = +this.route.snapshot.paramMap.get('id')!;

    this.productService.getProduct(productId).subscribe(
      (data) =>{
        this.product = data;
      }
    )
  }
}
