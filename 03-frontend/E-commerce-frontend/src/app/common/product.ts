import { StringMap } from "@angular/compiler/src/compiler_facade_interface";

export class Product {
  constructor(
    private id: number,
    private sku: string,
    private name: string,
    private description: string,
    private unitPrice: number,
    private imageUrl: string,
    private active: boolean,
    private unitsInStock: number,
    private dateCreated: Date,
    private lastUpdated: Date
  ) {}
}
