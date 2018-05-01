import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../servicios/auth.service';

@Component({
  selector: 'app-index-home-page',
  templateUrl: './index-home-page.component.html',
  styleUrls: ['./index-home-page.component.scss']
})
export class IndexHomePageComponent implements OnInit {

  public isLogin : boolean;
  public username : string;

  constructor(
  		public authService : AuthService,
  	) { }

  ngOnInit() { 
  	this.authService.getAuth().subscribe( auth => {
  		if(auth){
  			this.isLogin = true;
  			this.username = auth.displayName;
  		}else{
  			this.isLogin = false;
  		}

  	});
  }

}
