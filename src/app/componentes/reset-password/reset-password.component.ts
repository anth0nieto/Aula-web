import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../servicios/auth.service';
import { Router } from '@angular/router';
import { FlashMessagesService } from 'angular2-flash-messages';

@Component({
  selector: 'app-reset-password',
  templateUrl: './reset-password.component.html',
  styleUrls: ['./reset-password.component.scss']
})
export class ResetPasswordComponent implements OnInit {

  public email: string;

  constructor(
  		public authService : AuthService,
  		public router : Router,
  		public flashMessage : FlashMessagesService,
  	) { }

  ngOnInit() {
  }

  onForgot(){
  	this.authService.resetPassword(this.email)
  	.then((res) => {

      this.flashMessage.show('Correo enviado a : ' + this.email, 
        {cssClass: 'alert-success', timeout: 4000});
  		this.router.navigate(['/']);

  	}).catch((err) => {

      this.flashMessage.show(err.message, 
        {cssClass: 'alert-danger', timeout: 4000});
  		console.log(err);
  	});
  }
}
