import {Injectable} from '@angular/core'

import { IProduct } from './product';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/throw';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/do';

@Injectable()
export class ProductServiceV2 {
    private _productUrl = 'https://fabsfunctalpha.azurewebsites.net/api/psGetCosmosDBProducts?code=baVWDAfTjlze/hSO6GTk9/PN0FYC7W5AL93Ed2ME6yfyOsA/2VBzlw==';

    constructor(private _http: HttpClient){}

    getProducts(): Observable<IProduct[]> {
        return this._http.get<IProduct[]>(this._productUrl)
            .do(data => console.log('All: ' + JSON.stringify(data)))
            .catch(this.handleError);
    }

    private handleError(err: HttpErrorResponse) {
        console.log(err.message);
        return Observable.throw(err.message);
    }

}