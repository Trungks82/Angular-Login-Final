import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { SignInData } from 'src/app/model/signInData';
import { AuthenticationService } from 'src/app/services/authentication/authentication.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

    isFormInvalid = false;
  areCredentialsInvalid = false;

  constructor( private authenticationService: AuthenticationService) { }

  ngOnInit(): void {
  }

  onSubmit(signInForm: NgForm){
    if(!signInForm.valid){
      this.isFormInvalid = true;
      this.areCredentialsInvalid = false;
      return;
    }

    this.checkCredentials(signInForm);

    // console.log(signInForm.value);
    // const signInData = new SignInData(signInForm.value.email, signInForm.value.password);
    // this.authenticationService.authenticate(signInData);
  }

  private checkCredentials(signInForm: NgForm) {
    const signInData = new SignInData(signInForm.value.email,signInForm.value.password);
    if(!this.authenticationService.authenticate(signInData)){
      this.isFormInvalid =false;
      this.areCredentialsInvalid = true;
    }
  }

}
