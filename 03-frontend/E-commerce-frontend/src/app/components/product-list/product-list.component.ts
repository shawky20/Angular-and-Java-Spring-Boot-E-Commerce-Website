import { Component, OnInit } from '@angular/core';
import { Product } from 'src/app/common/product';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-grid.component.html',
  //  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {

  products:Product[];
  constructor(private productService:ProductService) { }

  ngOnInit() {
    this.listProducts();

  }

  listProducts(){
    this.productService.getProducts().subscribe(
      Response => {
        this.products = Response
      }
    )
  }

}
