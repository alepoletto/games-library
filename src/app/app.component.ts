import { Component, OnInit } from '@angular/core';
import * as firebase from 'firebase';
import { AuthService } from './auth/auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  constructor(private authService: AuthService){}

  ngOnInit(){
    let config = {
      apiKey: "AIzaSyAYtUqfgrWHFOetb5Jtsb8pghuTXIu6QU8",
    authDomain: "game-library-6da4c.firebaseapp.com"
    };
    firebase.initializeApp(config);
    firebase.auth().onAuthStateChanged((user) => {
      if(user != null) {
        this.authService.getToken();
      }

    });
  }
}
