import { Component, OnInit } from '@angular/core';
import * as firebase from 'firebase';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  loadedFeature = 'recipe';
  
  onNavigate(feature: string){
    this.loadedFeature = feature;
  }

  ngOnInit(){
    firebase.initializeApp({
      apiKey: "AIzaSyCZZLqSHCeQ6vOuGSiWPO8tH_aDZXXWeY8",
      authDomain: "ng-recipe-project-b6cda.firebaseapp.com"
    });
  }
}
