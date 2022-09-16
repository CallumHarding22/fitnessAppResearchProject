import { Component, OnInit } from '@angular/core';
import { Auth } from 'aws-amplify';
import { GoalDistancePopupComponent } from '../goal-distance-popup/goal-distance-popup.component';
import { MatDialog } from '@angular/material/dialog';
import { ApiService } from '../goal-distance-popup/services/api.service';
import { getHeapCodeStatistics } from 'v8';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit {
  public imageUrl = "ghost.png";
  public email: any;
  public timesRunWeek1: any;
  public distanceRunWeek1: any;
  public timesRunWeek2: any;
  public distanceRunWeek2: any;
  public timesRunWeek3: any;
  public distanceRunWeek3: any;
  public timesRunWeek4: any;
  public distanceRunWeek4: any;
  public distanceRun: any;
  public goalDistance: any;
  private newUser: any;
  public progress: any;
  public week1DistGoal: any;
  public week2DistGoal: any;
  public week3DistGoal: any;
  public week4DistGoal: any;
  public week1Item: any;
  public week2Item: any;
  public week3Item: any;
  public week4Item: any;
  constructor(private dialog: MatDialog, private service:ApiService) {
    
   }

  ngOnInit(): void {
    let email:any;
    const userAuthObj =  Auth.currentUserInfo().then((res)=>{
      email = res.attributes.email;
      this.email = email;
      // Checking if in DB
        this.service.getUser(email).subscribe((res) => {
          if (!res.Item) {
            this.newUser = true;
            this.openDialog();
           
        
          } else {
            this.newUser = false;
            this.getUserData(email);
          }
        });
      
    });

   
    
  }

  async getUserData(email:any){
    console.log(email);
    const user = this.service.getUser(email).subscribe((res) => {
      this.distanceRun = res.Item.distanceRun;
      this.goalDistance = res.Item.goalDistance;
      this.distanceRunWeek1 = res.Item.distanceRunWeek1;
      this.distanceRunWeek2 = res.Item.distanceRunWeek2;
      this.distanceRunWeek3 = res.Item.distanceRunWeek3;
      this.distanceRunWeek4 = res.Item.distanceRunWeek4;
      this.timesRunWeek1 = res.Item.timesRunWeek1;
      this.timesRunWeek2 = res.Item.timesRunWeek2;
      this.timesRunWeek3 = res.Item.timesRunWeek3;
      this.timesRunWeek4 = res.Item.timesRunWeek4;
      this.progress = Math.round(100 - ((this.distanceRun/this.goalDistance)*100));
      this.week1DistGoal = Math.round(this.goalDistance/6);
      this.week2DistGoal = Math.round(this.goalDistance/5);
      this.week3DistGoal = Math.round(this.goalDistance/4);
      this.week4DistGoal = Math.round(this.goalDistance/3);
      this.week1Item = res.Item.week1Item;
      this.week2Item = res.Item.week2Item;
      this.week3Item = res.Item.week3Item;
      this.week4Item = res.Item.week4Item;
      console.log(this.progress);
    });
  }

  openDialog() {
    this.dialog.open(GoalDistancePopupComponent,{
      panelClass: 'custom-modalbox',
      disableClose: true 
    });
  }
}
