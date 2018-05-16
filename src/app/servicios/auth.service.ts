import { Injectable } from '@angular/core';
import { AngularFireAuth } from 'angularfire2/auth';
import * as firebase from 'firebase/app';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';

@Injectable()
export class AuthService {

  constructor(
  	public afAuth: AngularFireAuth
  ) { }

  resetPassword(email: string){
    return this.afAuth.auth.sendPasswordResetEmail(email);
  }


  loginGoogle(){
    var provider = new firebase.auth.GoogleAuthProvider();
    return this.afAuth.auth.signInWithPopup(provider);
  }

  loginFacebook(){
    var provider = new firebase.auth.FacebookAuthProvider();
    return this.afAuth.auth.signInWithPopup(provider);
  }

  loginTwitter(){
    var provider = new firebase.auth.TwitterAuthProvider();
    return this.afAuth.auth.signInWithPopup(provider);
  }

  registerUser(email: string, pass: string){
  	return new Promise((resolve, reject) => {
  		this.afAuth.auth.createUserWithEmailAndPassword(email, pass)
  		.then( userData => resolve(userData),
  		err => reject(err));
  	});
  }

  loginEmail(email: string, pass: string){
  	return new Promise((resolve, reject) => {
  		this.afAuth.auth.signInWithEmailAndPassword(email, pass)
  		.then( userData => resolve(userData),
  		err => reject(err));
  	});
  }

  getAuth(){
  	return this.afAuth.authState.map(auth => auth);
  }   


  logout(){
  	return this.afAuth.auth.signOut();
  }




}
