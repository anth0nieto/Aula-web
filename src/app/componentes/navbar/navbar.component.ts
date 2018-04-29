import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../servicios/auth.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {
  
  public isLogin : boolean;
  public username : string;
  public email : string;

  constructor(
  		public authService : AuthService
  	) { }

  ngOnInit() { 
  	this.authService.getAuth().subscribe( auth => {
  		if(auth){
  			this.isLogin = true;
  			this.username = auth.displayName;
  			this.email = auth.email;
  		}else{
  			this.isLogin = false;
  		}

  	});
  }

  onClickLogout(){
  	this.authService.logout();
  }

}
