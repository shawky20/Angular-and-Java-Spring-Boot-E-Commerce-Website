import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs'; // rxjs >> reactive java script
import { map } from "rxjs/operators";
import { environment } from 'src/environments/environment';
import { Product } from '../common/product';
import { ProductCategory } from '../common/product-category';

@Injectable({
  providedIn: "root",
})
export class ProductService {
  private baseUrl = environment.backendUrl;

  constructor(private http: HttpClient) {}

  public getProducts(categoryId: number): Observable<Product[]> {
    const searchByIdUrl = `${this.baseUrl}/api/products/search/findByCategoryId?id=${categoryId}`; // id hna bn3to 3la tool ka parameter

    return this.http
      .get<GetResponseProduct>(searchByIdUrl)
      .pipe(map((response) => response._embedded.products));
  }
  public getProduct(productId:number):Observable<Product>{
    // dh el3ady 3shan hwa wa7ed bs 
      return this.http.get<Product>(`${this.baseUrl}/api/products/${productId}`);

  }

  public getProdeuctCategory(): Observable<ProductCategory[]> {
    const searchByCatUrl = `${this.baseUrl}/api/product-category`;

    return this.http
      .get<GetResponseProductCategory>(searchByCatUrl)
      .pipe(map((Response) => Response._embedded.productCategory));
  }

  public searchProducts(keyword: string): Observable<Product[]> {
    const searchByIdUrl = `${this.baseUrl}/api/products/search/findByNameContaining?name=${keyword}`;
    return this.http
      .get<GetResponseProduct>(searchByIdUrl)
      .pipe(map((response) => response._embedded.products));
  }
}

  interface GetResponseProduct {
    _embedded: {
      products: Product[];
    };
  }
  interface GetResponseProductCategory {
    _embedded: {
      productCategory: ProductCategory[];
    };
  }

