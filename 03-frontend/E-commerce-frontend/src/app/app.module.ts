import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProductListComponent } from './components/product-list/product-list.component';
import {HttpClientModule} from "@angular/common/http";
import { ProductService } from './services/product.service';
@NgModule({
  declarations: [
    AppComponent,
    ProductListComponent
  ],
  imports: [ // dy elly e7na 3ayzenha mn Angular
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [ProductService], // dh elly e7an 3amlenoo lba2y el parts 
  bootstrap: [AppComponent]
})
export class AppModule { }
