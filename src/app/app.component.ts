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

    this.deezerJs();
  }

  deezerJs() {
    const deezerScript = [
      'src/app/queryDeezer.js'
    ];

    for(let i = 0; i < deezerScript.length; i++){
      const node = document.createElement('script');
      node.src = deezerScript[1];
      node.type = 'javascript'
      node.async = false;
      document.getElementsByTagName('head')[0].appendChild(node);
    }
  }

}


