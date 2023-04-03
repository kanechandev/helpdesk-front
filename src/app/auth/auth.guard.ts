import { AuthService } from 'src/app/services/auth.service';
import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {

  constructor(private AuthService: AuthService, private router: Router) {}

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): boolean {
    let authenticated = this.AuthService.isAuthenticated();

    if(authenticated){
      return true;
    }else{
      this.router.navigate(['login']);
      return false;
    }
  }
  
}
