import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  title = 'deezer-angular';

  imagePath: string;

  imagePathSearchButton: string;

  constructor(){
    //image location
    this.imagePath = '/assets/deezer-logo-2021.svg'

    this.imagePathSearchButton = '/assets/magnifier.png'
  }

}


