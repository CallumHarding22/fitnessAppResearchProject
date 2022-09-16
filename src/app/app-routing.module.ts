import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProfileComponent } from './sub-systems/profile/profile.component';
import { AuthComponent } from './sub-systems/Auth/auth/auth.component';
import { AuthGuardService } from './Services/auth-guard.service';
import { InputRunComponent } from './sub-systems/input-run/input-run.component';

const routes: Routes = [
  {
    path: 'profile', 
    component: ProfileComponent,
    canActivate:[AuthGuardService]
  },
  {
    path: 'login',
    component: AuthComponent
  },
  {
    path: 'input',
    component: InputRunComponent,
    canActivate:[AuthGuardService]
  },  
  {
    path: '**',
    component: ProfileComponent,
    canActivate:[AuthGuardService]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
