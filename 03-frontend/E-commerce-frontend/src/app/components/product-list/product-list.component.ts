import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
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
  currentCategoryIid: number = 1; // 1 to prevent grabage values
  searchMode:boolean = false;
  constructor(private productService:ProductService,
              private route:ActivatedRoute) { }

  ngOnInit() {
    this.route.paramMap.subscribe (() => {
        this.listProducts();
      });
  }


  listProducts(){
    // bnshhoof elrouting 3ndo keyword wla wla low 3ndo yb2a e7na hn3ml search 
    this.searchMode = this.route.snapshot.paramMap.has("keyword");
    if(this.searchMode)
    {
      this.handleSearchProduct();
    }else{
      this.handleListProduct();
    }
  }

  handleSearchProduct(){
    const searchkeyword: string = this.route.snapshot.paramMap.get("keyword")!;
    this.productService.searchProducts(searchkeyword).subscribe((Response) => {
      this.products = Response;
    });
  }
  handleListProduct(){
    //chech if the rout have id
    const hasCategoryId: boolean = this.route.snapshot.paramMap.has("id");

    if (hasCategoryId) {
      this.currentCategoryIid = +this.route.snapshot.paramMap.get("id")!; //+ to coonvert the id to number
      // ? exlamation symbol >> ! dy btool ll comiler eno not null
    } else {
      this.currentCategoryIid = 1; // default 1 low msh ba3et el id
    }
    this.productService
      .getProducts(this.currentCategoryIid)
      .subscribe((Response) => {
        this.products = Response;
      });
  }
}
