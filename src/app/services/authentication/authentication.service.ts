import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { SignInData } from 'src/app/model/signInData';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {

  private readonly mockeduser = new SignInData("admin", "admin")

  isAuthenticated = false;

  constructor(private router: Router) { }

  authenticate(signInData: SignInData): boolean {
    if(this.checkCredential(signInData)){
      this.isAuthenticated = true;
      this.router.navigate(['home'])
      return true;
    }
    this.isAuthenticated = false;
    return false
  }

  private checkCredential(signInData: SignInData): boolean {
    return this.checkEmail(signInData.getEmail()) && this.checkPassword(signInData.getPassword())
  }

  private checkEmail(email:string): boolean {
    return email === this.mockeduser.getEmail()
  }

  private checkPassword(password:string): boolean {
    return password === this.mockeduser.getPassword()
  }

  logout(){
    this.isAuthenticated =false;
    this.router.navigate(['']);
  }
}
