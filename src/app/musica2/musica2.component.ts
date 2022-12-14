import { Component, OnInit} from '@angular/core';
import { HttpClient } from "@angular/common/http";

@Component({
  selector: 'app-root',
  templateUrl: './musica2.component.html',
  styleUrls: ['./musica2.component.css']
})
export class Musica2Component implements OnInit {

  musicName:string = "";
  tracks: any = [];
  cover: any = [];
  constructor(private http: HttpClient){

  }

  ngOnInit(): void {
      this.getMethodPlaylists();

  }

  changeMusicName(eventData:Event){
    this.musicName = (<HTMLInputElement>eventData.target).value;
  }

  public getMethodPlaylists(){
    const options = {
      method: 'GET',
      headers: {
        'X-RapidAPI-Key': '00409c6540msh20ba7d743bf8d70p10020djsnb1ca8717e8c6',
        'X-RapidAPI-Host': 'deezerdevs-deezer.p.rapidapi.com'
      }
    };
    this.http.get('https://deezerdevs-deezer.p.rapidapi.com/playlist/3155776842?limit=5', options).subscribe((data:any) =>{
      this.tracks = data.tracks.data;
    });
  }
}