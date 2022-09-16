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
    let today = new Date();
    let changedDate: any;
    console.log(today);
    let data = {
       /* "distanceRun": 0,
        "distanceRunWeek1": 0,
        "goalDistance": body.goalDistance,
        "timesRunWeek1":  0,
        "email": email,
        "week1Item": false,
        "week1Subgoal1": false,
        "week1Subgoal2": false*/
        "email": email,
        "createdAt": today,
        "distanceRun": 0,
        "distanceRunWeek1": 0,
        "distanceRunWeek2": 0,
        "distanceRunWeek3": 0,
        "distanceRunWeek4": 0,
        "goalDistance": body.goalDistance,
        "timesRunWeek1": 0,
        "timesRunWeek2": 0,
        "timesRunWeek3": 0,
        "timesRunWeek4": 0,
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
