import { Component } from '@angular/core';
import { ProductService } from '../products/product.service';
import { ProductServiceV2 } from '../products/product.service.v2';

@Component({
  selector: 'pm-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],

  providers: [ProductService, ProductServiceV2]
})
export class AppComponent {
  title = 'Angular: Fabian';
}
