import { Component, OnInit } from '@angular/core';
import { MatSlider } from '@angular/material/slider';
import { ApiService } from './services/api.service';
import { Auth } from 'aws-amplify';
import {Router} from '@angular/router';

@Component({
  selector: 'app-input-run',
  templateUrl: './input-run.component.html',
  styleUrls: ['./input-run.component.scss']
})
export class InputRunComponent implements OnInit {
  formatLabel(value: number) {
      return value + 'km';
  }

  gridsize: number = 1;
  updateSetting(event:any) {
    this.gridsize = event.value;
  }
  constructor(private service:ApiService, private router: Router) { }

  ngOnInit(): void {
  }

  async insertRun(){ 
      let email: any;
      const userAuthObj = await Auth.currentUserInfo().then((res) => {
        email = res.attributes.email;
    });

    let data = await this.service.getUser(email).subscribe((res) => {
      let createdAt = new Date(res.Item.createdAt)
      let current = new Date();
      var Time = current.getTime() - createdAt.getTime(); 
      var days = Math.floor(Time / (1000 * 3600 * 24));
      console.log("Days " +days);
      let w1g1: any;
      let w1g2: any;
      let w1Item: any;
      let w2g1: any;
      let w2g2: any;
      let w2Item: any;
      let w3g1: any;
      let w3g2: any;
      let w3Item: any;
      let w4g1: any;
      let w4g2: any;
      let w4Item: any;
      console.log("input test1:" +res.Item.timesRunWeek1);
      console.log("input test1:" +res.Item.distanceRunWeek1);
      let d : any;
      if(days<7){
        if(res.Item.timesRunWeek1+1>=3){
          w1g1 = true;
          
       }else{
         w1g1 = false;
       }
       if((res.Item.distanceRunWeek1 + this.gridsize)>=(Math.round(res.Item.goalDistance/6))){
          w1g2 = true;
       }else{
         w1g2 = false;
       }
 
       if(w1g1  == true && w1g2 == true){
         w1Item = true;
       }else{
         w1Item = false;
       }
        d = {
        /* "distanceRun": (res.Item.distanceRun + this.gridsize),
         "distanceRunWeek1": (res.Item.distanceRunWeek1 + this.gridsize),
         "goalDistance": res.Item.goalDistance,
         "timesRunWeek1":  res.Item.timesRunWeek1+1,
         "email": email,
         "week1Subgoal1": w1g1,
         "week1Subgoal2": w1g2 */
 
         "email": email,
         "createdAt": res.Item.createdAt,
         "distanceRun": (res.Item.distanceRun + this.gridsize),
         "distanceRunWeek1": (res.Item.distanceRunWeek1 + this.gridsize),
         "distanceRunWeek2": 0,
         "distanceRunWeek3": 0,
         "goalDistance": res.Item.goalDistance,
         "timesRunWeek1": res.Item.timesRunWeek1+1,
         "timesRunWeek2": 0,
         "timesRunWeek3": 0,
         "timesRunWeek4": 0,
         "week1Item": w1Item,
         "week1SubGoal1": w1g1,
         "week1SubGoal2": w1g2,
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
      }else if(days <14){
        if(res.Item.timesRunWeek2+1>=3){
          w2g1 = true;
          
       }else{
         w2g1 = false;
       }
       if((res.Item.distanceRunWeek2 + this.gridsize)>=(Math.round(res.Item.goalDistance/5))){
          w2g2 = true;
       }else{
         w2g2 = false;
       }
 
       if(w2g1  == true && w2g2 == true){
         w2Item = true;
       }else{
         w2Item = false;
       }
       d = {
        /* "distanceRun": (res.Item.distanceRun + this.gridsize),
         "distanceRunWeek1": (res.Item.distanceRunWeek1 + this.gridsize),
         "goalDistance": res.Item.goalDistance,
         "timesRunWeek1":  res.Item.timesRunWeek1+1,
         "email": email,
         "week1Subgoal1": w1g1,
         "week1Subgoal2": w1g2 */
         "email": email,
         "createdAt": res.Item.createdAt,
         "distanceRun": (res.Item.distanceRun + this.gridsize),
         "distanceRunWeek1": res.Item.distanceRunWeek1,
         "distanceRunWeek2": (res.Item.distanceRunWeek2 + this.gridsize),
         "distanceRunWeek3": 0,
         "goalDistance": res.Item.goalDistance,
         "timesRunWeek1": res.Item.timesRunWeek1,
         "timesRunWeek2": res.Item.timesRunWeek2+1,
         "timesRunWeek3": 0,
         "timesRunWeek4": 0,
         "week1Item": res.Item.week1Item,
         "week1SubGoal1": res.Item.week1SubGoal1,
         "week1SubGoal2": res.Item.week1SubGoal2,
         "week2Item": w2Item,
         "week2SubGoal1": w2g1,
         "week2SubGoal2": w2g2,
         "week3Item": false,
         "week3SubGoal1": false,
         "week3SubGoal2": false,
         "week4Item": false,
         "week4SubGoal1": false,
         "week4SubGoal2": false
         
       }
      }else if(days < 21){
        if(res.Item.timesRunWeek3+1>=3){
          w3g1 = true;
          
       }else{
         w3g1 = false;
       }
       if((res.Item.distanceRunWeek3 + this.gridsize)>=(Math.round(res.Item.goalDistance/4))){
          w3g2 = true;
       }else{
         w3g2 = false;
       }
 
       if(w3g1  == true && w3g2 == true){
         w3Item = true;
       }else{
         w3Item = false;
       }
       console.log("Week 3")
       d = {
        /* "distanceRun": (res.Item.distanceRun + this.gridsize),
         "distanceRunWeek1": (res.Item.distanceRunWeek1 + this.gridsize),
         "goalDistance": res.Item.goalDistance,
         "timesRunWeek1":  res.Item.timesRunWeek1+1,
         "email": email,
         "week1Subgoal1": w1g1,
         "week1Subgoal2": w1g2 */
         "email": email,
         "createdAt": res.Item.createdAt,
         "distanceRun": (res.Item.distanceRun + this.gridsize),
         "distanceRunWeek1": res.Item.distanceRunWeek1,
         "distanceRunWeek2": res.Item.distanceRunWeek2,
         "distanceRunWeek3":(res.Item.distanceRunWeek3 + this.gridsize),
         "distanceRunWeek4": 0,
         "goalDistance": res.Item.goalDistance,
         "timesRunWeek1": res.Item.timesRunWeek1,
         "timesRunWeek2": res.Item.timesRunWeek2,
         "timesRunWeek3": res.Item.timesRunWeek3+1,
         "timesRunWeek4": 0,
         "week1Item": res.Item.week1Item,
         "week1SubGoal1": res.Item.week1SubGoal1,
         "week1SubGoal2": res.Item.week1SubGoal2,
         "week2Item":  res.Item.week2Item,
         "week2SubGoal1": res.Item.week2SubGoal1,
         "week2SubGoal2": res.Item.week2SubGoal2,
         "week3Item": w3Item,
         "week3SubGoal1": w3g1,
         "week3SubGoal2": w3g2,
         "week4Item": false,
         "week4SubGoal1": false,
         "week4SubGoal2": false
       }
      }else{
        if(res.Item.timesRunWeek4+1>=3){
          w4g1 = true;
          
       }else{
         w4g1 = false;
       }
       if((res.Item.distanceRunWeek4 + this.gridsize)>=(Math.round(res.Item.goalDistance/3))){
          w4g2 = true;
       }else{
         w4g2 = false;
       }
 
       if(w4g1  == true && w4g2 == true){
         w4Item = true;
       }else{
         w4Item = false;
       }
       d = {
        /* "distanceRun": (res.Item.distanceRun + this.gridsize),
         "distanceRunWeek1": (res.Item.distanceRunWeek1 + this.gridsize),
         "goalDistance": res.Item.goalDistance,
         "timesRunWeek1":  res.Item.timesRunWeek1+1,
         "email": email,
         "week1Subgoal1": w1g1,
         "week1Subgoal2": w1g2 */
         "email": email,
         "createdAt": res.Item.createdAt,
         "distanceRun": (res.Item.distanceRun + this.gridsize),
         "distanceRunWeek1": res.Item.distanceRunWeek1,
         "distanceRunWeek2": res.Item.distanceRunWeek2,
         "distanceRunWeek3": res.Item.distanceRunWeek3,
         "distanceRunWeek4": (res.Item.distanceRunWeek4 + this.gridsize),
         "goalDistance": res.Item.goalDistance,
         "timesRunWeek1": res.Item.timesRunWeek1,
         "timesRunWeek2": res.Item.timesRunWeek2,
         "timesRunWeek3": res.Item.timesRunWeek3,
         "timesRunWeek4": res.Item.timesRunWeek4+1,
         "week1Item": res.Item.week1Item,
         "week1SubGoal1": res.Item.week1SubGoal1,
         "week1SubGoal2": res.Item.week1SubGoal2,
         "week2Item":  res.Item.week2Item,
         "week2SubGoal1": res.Item.week2SubGoal1,
         "week2SubGoal2": res.Item.week2SubGoal2,
         "week3Item":  res.Item.week3Item,
         "week3SubGoal1": res.Item.week3SubGoal1,
         "week3SubGoal2": res.Item.week3SubGoal2,
         "week4Item": w4Item,
         "week4SubGoal1": w4g1,
         "week4SubGoal2": w4g2
       }
      }
      


      this.service.insertUser(d,email).subscribe((res) => {
        console.log(res);
      });
    });


    this.router.navigateByUrl('/profile');
  }

}
