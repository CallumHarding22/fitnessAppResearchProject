import { Component, OnInit } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {MatDialog } from '@angular/material/dialog';
import { FormBuilder, FormGroup, FormControl, Validators } from '@angular/forms';
import { ApiService } from './services/api.service';
import { Auth } from 'aws-amplify';

@Component({
  selector: 'app-goal-distance-popup',
  templateUrl: './goal-distance-popup.component.html',
  styleUrls: ['./goal-distance-popup.component.scss']
})
export class GoalDistancePopupComponent implements OnInit {
  public e: any;

  constructor(private dialog: MatDialog, private formBuilder: FormBuilder,private service:ApiService ) { 
    const userAuthObj = Auth.currentUserInfo().then((res) => {
      this.e = res.attributes.email;
    });
  }

  ngOnInit(): void {
    
  }

  prefForm = new FormGroup({
    'goalDistance':new FormControl('',Validators.required),
});

submitPreferences() {{
  if(this.prefForm.value.goalDistance!=null){
    this.service.insertUser(this.prefForm.value, this.e).subscribe((res) => {
    });

    console.log(this.service.getAll());
    this.dialog.closeAll();
  }
}

}

}
