import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs'; // rxjs >> reactive java script
import { map } from "rxjs/operators";
import { environment } from 'src/environments/environment';
import { Product } from '../common/product';

@Injectable({
  providedIn: "root",
})
export class ProductService {
  private baseUrl = environment.backendUrl;

  constructor(private http: HttpClient) {

  }

  public getProducts(): Observable<Product[]>{
    return this.http.get<GetResponse>(this.baseUrl).pipe(
      map(response => response._embedded.products)
    );
  }


}

  interface GetResponse {
    _embedded: {
      products: Product[];
    };
  }
