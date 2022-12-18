import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProductListComponent } from './components/product-list/product-list.component';
import {HttpClientModule} from "@angular/common/http";
import { ProductService } from './services/product.service';
import { Route, RouterModule } from "@angular/router";
import { RouterTestingModule } from "@angular/router/testing";
import { ProductCategoryListComponent } from './components/product-category-list/product-category-list.component';
import { SearchComponent } from './components/search/search.component';
import { ProductsDetailsComponent } from './components/products-details/products-details.component';

const routers: Route[] = [
  // always start from specific to generics as the order is important
  { path: "product/:id", component: ProductsDetailsComponent },
  { path: "search/:keyword", component: SearchComponent },
  { path: "categoory/:id", component: ProductListComponent }, // create instance if this component when hit this path
  { path: "categoory", component: ProductListComponent },
  { path: "products", component: ProductListComponent },
  { path: "", redirectTo: "/products", pathMatch: "full" }, // low 2atbow kda yroo7 l products
  { path: "**", redirectTo: "/products", pathMatch: "full" }, // generic wildcard ay 7aga 5eer elly foo2 eroo7 l products
];
@NgModule({
  declarations: [AppComponent, ProductListComponent, ProductCategoryListComponent, SearchComponent, ProductsDetailsComponent],
  // dy elly e7na 3ayzenha mn Angular
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    RouterTestingModule,
    RouterModule.forRoot(routers),
  ],
  providers: [ProductService], // dh elly e7an 3amlenoo lba2y el parts
  bootstrap: [AppComponent],
})
export class AppModule {}
