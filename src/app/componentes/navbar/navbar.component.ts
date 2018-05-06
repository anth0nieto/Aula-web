import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../servicios/auth.service';
import { Router } from '@angular/router';
import { FlashMessagesService } from 'angular2-flash-messages';
import {MatToolbarModule} from '@angular/material/toolbar';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {
  
  public isLogin : boolean;
  public username : string;
  public email : string;
  public fotoUsuario : string;

  constructor(
  		public authService : AuthService,
      public flashMessage : FlashMessagesService,
      public router : Router,
  	) { }

  ngOnInit() { 
  	this.authService.getAuth().subscribe( auth => {
  		if(auth){
  			this.isLogin = true;
  			this.username = auth.displayName;
  			this.email = auth.email;
        this.fotoUsuario = auth.photoURL;
  		}else{
  			this.isLogin = false;
  		}

  	});
  }

  onClickLogout(){
  	this.authService.logout();
    this.router.navigate(['/']);
  }

}
