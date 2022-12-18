import { Component, OnInit } from '@angular/core';
import { ProductService } from 'src/app/services/product.service';
import { ProductCategory } from 'src/app/common/product-category';
@Component({
  selector: 'app-product-category-list',
  templateUrl: './product-category-list.component.html',
  styleUrls: ['./product-category-list.component.css']
})
export class ProductCategoryListComponent implements OnInit {


  productCategorys: ProductCategory[] = [];
  constructor(private productService:ProductService) { }

  ngOnInit() {
    this.productCategoryList();
  }

  productCategoryList(){
    this.productService.getProdeuctCategory().subscribe(
      data => {
        this.productCategorys = data;
        console.log(this.productCategorys);
      }
    )
  }

}
