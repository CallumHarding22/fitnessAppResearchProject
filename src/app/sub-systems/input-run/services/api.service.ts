import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private http:HttpClient) { }

  API_ENDPOINT = 'https://het5stxm4c.execute-api.eu-west-2.amazonaws.com/user';

  getAll():Observable<any>{
    return this.http.get(`${this.API_ENDPOINT}`);
  }

  getUser(email:any):Observable<any>
  {
    const httpOptions = {
      headers: new HttpHeaders({
        'Access-Control-Allow-Methods': 'Get'
      })
    };
    
    return this.http.get(`${this.API_ENDPOINT}/${email}`, httpOptions);
  }

  updateUser(data:any, id:any):Observable<any>
  {
    return this.http.put(`${this.API_ENDPOINT}/${id}`, data);
  }

  insertUser(body:any, email:any):Observable<any>
  {
    
    let data = body;
    return this.http.put(`${this.API_ENDPOINT}`, data);
  }

  deleteUser(id:any):Observable<any>{
    return this.http.delete(`${this.API_ENDPOINT}/${id}`);
  }
}
