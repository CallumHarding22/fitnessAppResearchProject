import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {HttpClientModule} from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AmplifyAuthenticatorModule } from '@aws-amplify/ui-angular';
import { AuthenticatorService } from '@aws-amplify/ui-angular';
import { MatDialogModule } from '@angular/material/dialog';
import { MatTooltipModule } from '@angular/material/tooltip';
import Amplify, { Auth } from 'aws-amplify';
import awsconfig from '../aws-exports.js';
import { GoalDistancePopupComponent } from './sub-systems/goal-distance-popup/goal-distance-popup.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ProfileComponent } from './sub-systems/profile/profile.component';
import { AuthComponent } from './sub-systems/Auth/auth/auth.component'; 
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { InputRunComponent } from './sub-systems/input-run/input-run.component';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatSelectModule } from '@angular/material/select';
import { MatButtonModule } from '@angular/material/button';
import {MatIconModule} from '@angular/material/icon';
import {MatSliderModule} from '@angular/material/slider';


Amplify.configure(awsconfig);


Auth.configure(awsconfig);



@NgModule({
  declarations: [
    AppComponent,
    GoalDistancePopupComponent,
    ProfileComponent,
    AuthComponent,
    InputRunComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AmplifyAuthenticatorModule,
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    MatDialogModule,
    MatProgressBarModule,
    MatSidenavModule,
    MatSelectModule,
    MatButtonModule,
    MatIconModule,
    MatTooltipModule,
    MatSliderModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
