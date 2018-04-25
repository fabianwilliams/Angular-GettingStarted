import {Component, OnInit} from '@angular/core';
import { IProduct } from './product';
import { ProductService } from './product.service';
import { ProductServiceV2 } from './product.service.v2';

@Component({
    selector: 'pm-products',
    templateUrl: './product-list.component.html',
    styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit{
    pageTitle: string = 'Our Product List';
    //below we will set the image size by usign widdth adn margin
    imageWidth: number = 50;
    imageMargin: number = 2;
    showImage: boolean = false;
    errorMessage: string;
    //listFilter: string = 'claw';  //going to remove this and use a getter and setter so we can do filters
    _listFilter: string;
    get listFilter(): string {
        return this._listFilter
    }
    set listFilter(value: string) {
        this._listFilter = value;
        this.filteredProducts= this.listFilter ? this.performFilter(this.listFilter): this.products; //the this.products is the property below on line 28 which is populated by the onInit 
        //which ultimately is called in line 54
    }
    filteredProducts: IProduct[];
    //products: any[] =  -- used if i didnt have a Product Interface
    products: IProduct[] = []; //prior to this empty array I had the list of products hard coded here but I moved this to a product servcies which is now called in the onInit below

    constructor(private _productService: ProductServiceV2) {
        //this.listFilter = 'cart';
    }

    //somewhat trivial but we are going to change the Product List header
    //to show how we can respond to an event in a nested control back to the container
    onRatingClicked(message: string): void {
        this.pageTitle = 'Product List: ' + message;
    }

    performFilter(filterBy: string): IProduct[] {
        filterBy = filterBy.toLocaleLowerCase();
        return this.products.filter(( product: IProduct) =>
        product.productName.toLocaleLowerCase().indexOf(filterBy) !== -1)
    }

    toggleImage(): void{
        this.showImage = !this.showImage;
    }
    /*
    ngOnInit(): void {
        //often and in this case used for product initialization. I also moved the filter here since onInit is called after the constructor the filter we couldnt have the filter be called there
        console.log('In OnInit Method');
        this.products = this._productService.getProducts();
        this.filteredProducts = this.products;
    }
    */
   ngOnInit(): void {
    //often and in this case used for product initialization. I also moved the filter here since onInit is called after the constructor the filter we couldnt have the filter be called there
    console.log('In OnInit Method');
    this._productService.getProducts()
            .subscribe(products => {
                this.products = products,
                this.filteredProducts = this.products;
            },
                error => this.errorMessage = <any>error);
    
}
}