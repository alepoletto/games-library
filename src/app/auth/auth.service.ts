import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import * as firebase from 'firebase';

@Injectable()
export class AuthService {

  token:string;

  constructor(private router: Router) { }

  signupUser(email:string, password:string){
    firebase.auth().createUserWithEmailAndPassword(email,password)
    .catch(error => console.log(error));
  }

  async signinUser(email:string, password:string){
    let resp = await firebase.auth().signInWithEmailAndPassword(email,password);
    this.token = await firebase.auth().currentUser.getIdToken();
    this.router.navigate(['/']);
  }

  getToken() {
     firebase.auth().currentUser.getIdToken().then((token: string) => this.token = token);
     return this.token;
  }

  async logout(){
    await firebase.auth().signOut();
    this.token = null;
    this.router.navigate(['/signin']);
  }

  isAuthenticated(){
    return this.token != null;
  }

  getCurrentUser(){
    return firebase.auth().currentUser;
  }

}
