import { Component, OnInit, HostBinding, ViewChild } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { auth } from 'firebase';
import * as firebase from 'firebase/app';
import {MatSidenav} from '@angular/material/sidenav';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {

  authenticated: boolean = true;
  @ViewChild('sidenav') sidenav: MatSidenav;

  constructor(public afAuth: AngularFireAuth){
    this.afAuth.authState.subscribe(auth => {
      if(auth){
        this.authenticated = true;
      }else{
        this.authenticated = false;
      }
    })
  }

  ngOnInit(){
    console.log(this.afAuth.auth.currentUser);
    console.log(this.afAuth.authState);
  }

  login() {
    this.afAuth.auth.signInWithPopup(new auth.GoogleAuthProvider()).then(data =>{
      console.log(data);
      if(data.user != null){
        this.authenticated=true;
        this.afAuth.auth.setPersistence(firebase.auth.Auth.Persistence.LOCAL).then(data => {
          console.log('persistense set');
        });
      }
    });
  }
  logout() {
    this.afAuth.auth.signOut().then(data => {
      this.authenticated = false;
    });
  }


}
