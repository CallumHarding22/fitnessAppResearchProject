import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import {CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router, RouterLink} from '@angular/router';
import { ApiService } from './api.service';
import { Auth } from 'aws-amplify';

@Injectable({
  providedIn: 'root'
})
export class AuthGuardService implements CanActivate {
  public email: any;
  public activate = false;
  constructor(private router: Router, private service:ApiService) {
    let user:any;
    
  }

  
   async canActivate(route: ActivatedRouteSnapshot, state:RouterStateSnapshot): Promise<boolean>{
    // return true if you want to navigate, otherwise return false
   
   
      let email:any;
      await Auth.currentUserInfo().then((res)=>{
        if(res != null){
          email = res.attributes.email
        }else{
          email = null;
        }
        
        console.log(res);
      });
      console.log(email);
      if(email != null){
        return true;
      }else{
        this.router.navigateByUrl('/login');
        return false;
      }
  }
}