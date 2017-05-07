import { Injectable } from '@angular/core';
import { Http, Response, Headers, RequestOptions } from '@angular/http';
import { HelpFunction } from '../help';
import { Article } from '../models/article';

@Injectable()
export class ArticleService{

    constructor(private http:Http){

    }

    addArticle(article:Article){
        var token = localStorage.getItem('token');
        let headers      = new Headers({ 
            'Content-Type': 'application/json',
            'token' : token
        }); // ... Set content type to JSON
        let options       = new RequestOptions({ headers: headers }); // Create a request option

        return this.http.post(HelpFunction.url + '/article', article, options).map((res:Response) => res.json());
    }
}