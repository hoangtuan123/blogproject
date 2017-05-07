import { Injectable } from '@angular/core';
import { Http, Response, Headers, RequestOptions } from '@angular/http';
import { HelpFunction } from '../help';

@Injectable()
export class ProductService{
    

    constructor(private http:Http){

    }

    getProductAll(){
        var token = localStorage.getItem('token');
        let headers      = new Headers({ 
            'Content-Type': 'application/json',
            'token' : token
        }); // ... Set content type to JSON
        let options       = new RequestOptions({ headers: headers }); // Create a request option

        return this.http.get(HelpFunction.url + '/product', options).map((res:Response) => res.json());
    }
    getProductById(id:number){
        var token = localStorage.getItem('token');
        let headers      = new Headers({ 
            'Content-Type': 'application/json',
            'token' : token
        }); // ... Set content type to JSON
        let options       = new RequestOptions({ headers: headers }); // Create a request option

        return this.http.get(HelpFunction.url + '/product/' + id, options).map((res:Response) => res.json());
    }
}