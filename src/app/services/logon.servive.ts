import { Injectable } from '@angular/core';
import { Http, Response, Headers, RequestOptions } from '@angular/http';
import { HelpFunction } from '../help';

@Injectable()
export class LogonService{

    constructor(private http:Http){

    }

    getUser(username:string,password:string){
        let strCertification = username + ':' + password;
        let strEnCode = HelpFunction.b64EncodeUnicode(strCertification);
        let headers      = new Headers({ 
            'Content-Type': 'application/json',
            'Authorization' : 'Basic ' + strEnCode
        }); // ... Set content type to JSON
        let options       = new RequestOptions({ headers: headers }); // Create a request option

        return this.http.post(HelpFunction.url + '/logon', null, options).map((res:Response) => res);
    }
}