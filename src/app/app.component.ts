import { Component } from '@angular/core';
import { AuthenticatorService } from '@aws-amplify/ui-angular';
import { Auth } from 'aws-amplify';
import { unwatchFile } from 'fs';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'FitnessApp';
 
  constructor(public authenticator: AuthenticatorService, private router: Router ) {
    let user = Auth.currentAuthenticatedUser();
    console.log(user);
  }

  signOut(){
    this.authenticator.signOut();
    this.router.navigateByUrl('/login');
  }



}
