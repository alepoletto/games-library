import { Component, OnInit } from '@angular/core';
import * as firebase from 'firebase';
import { AuthService } from './auth/auth.service';
import config  from './config/config.json';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  constructor(private authService: AuthService){}

  ngOnInit(){
    firebase.initializeApp(config);
    firebase.auth().onAuthStateChanged((user) => {
      if(user != null) {
        this.authService.getToken();
      }

    });
  }
}
