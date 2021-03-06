import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../servicios/auth.service';
import { Router } from '@angular/router';
import { FlashMessagesService } from 'angular2-flash-messages';



@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.scss']
})
export class LoginPageComponent implements OnInit {
  
	public email : string;
	public password : string;
  public username : string;

  constructor(
  		public authService : AuthService,
  		public router : Router,
      public flashMessage: FlashMessagesService
  	) { }

  ngOnInit() {
  }

  onSubmitLogin(){
  	this.authService.loginEmail(this.email,this.password)
  	.then((res) => {

      this.flashMessage.show('Usuario loggeado exitosamente', 
        {cssClass: 'alert-success', timeout: 4000});
  		this.router.navigate(['/index-home']);

  	}).catch((err) => {

      this.flashMessage.show(err.message, 
        {cssClass: 'alert-danger', timeout: 4000});
  		console.log(err);
  	});
  }

  onClickGoogleLogin(){
    this.authService.loginGoogle()
    .then((res) => {
      this.router.navigate(['/index-home']);
    }).catch((err) => {
      console.log(err.message);
    });
  }

  onClickFacebookLogin(){
    this.authService.loginFacebook()
    .then((res) => {
      this.router.navigate(['/index-home']);
    }).catch((err) => {
      console.log(err.message);
    });
  }

  onClickTwitterLogin(){
    this.authService.loginTwitter()
    .then((res) => {
      this.router.navigate(['/index-home']);
    }).catch((err) => {
      console.log(err.message);
    });
  }

}
