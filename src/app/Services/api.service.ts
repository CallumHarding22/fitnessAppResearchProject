import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private http:HttpClient) { }

  API_ENDPOINT = 'https://het5stxm4c.execute-api.eu-west-2.amazonaws.com/user';

  getUser(email:any):Observable<any>
  {
    const httpOptions = {
      headers: new HttpHeaders({
        'Access-Control-Allow-Methods': 'POST'
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
    let data = {
      "email": body.email,
      "createdAt": body.createdAt,
      "distanceRun": body.distanceRun,
      "distanceRunWeek1": body.distanceRunWeek1,
      "distanceRunWeek2": body.distanceRunWeek2,
      "distanceRunWeek3": body.distanceRunWeek3,
      "distanceRunWeek4": body.distanceRunWeek3,
      "goalDistance": body.goalDistance,
      "timesRunWeek1": body.timesRunWeek1,
      "timesRunWeek2": body.timesRunWeek2,
      "timesRunWeek3": body.timesRunWeek3,
      "timesRunWeek4": body.timesRunWeek4,
      "week1Item": false,
      "week1SubGoal1": false,
      "week1SubGoal2": false,
      "week2Item": false,
      "week2SubGoal1": false,
      "week2SubGoal2": false,
      "week3Item": false,
      "week3SubGoal1": false,
      "week3SubGoal2": false,
      "week4Item": false,
      "week4SubGoal1": false,
      "week4SubGoal2": false
    }
    return this.http.put(`${this.API_ENDPOINT}`, data);
  }

  deleteUser(id:any):Observable<any>{
    return this.http.delete(`${this.API_ENDPOINT}/${id}`);
  }
}
