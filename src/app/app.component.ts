import { Component, OnInit} from '@angular/core';
import { HttpClient } from "@angular/common/http";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  objectMusic: any = [];
  musicName:string = '';
  search: any = [];
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

  public getMethodSearch(){
    const options = {
      method: 'GET',
      url: 'https://deezerdevs-deezer.p.rapidapi.com/search',
      params: {q: this.musicName ,"limit": 1}, // Usar event binding no parametro da função e usar o mesmo parametro na querie
      headers: {
        'X-RapidAPI-Key': '00409c6540msh20ba7d743bf8d70p10020djsnb1ca8717e8c6',
        'X-RapidAPI-Host': 'deezerdevs-deezer.p.rapidapi.com'
      }
    };
    this.http.get(`https://deezerdevs-deezer.p.rapidapi.com/search`, options).subscribe((data:any) =>{
      this.objectMusic = data
      console.log(this.objectMusic.data[0])
  })
  }

  public getMethodPlaylists(){
    const options = {
      method: 'GET',
      headers: {
        'X-RapidAPI-Key': '00409c6540msh20ba7d743bf8d70p10020djsnb1ca8717e8c6',
        'X-RapidAPI-Host': 'deezerdevs-deezer.p.rapidapi.com'
      }
    };
    this.http.get('https://deezerdevs-deezer.p.rapidapi.com/playlist/3155776842?limit=4', options).subscribe((data:any) =>{
      this.tracks = data.tracks.data;
      this.tracks[4] = this.objectMusic.data[0]
      console.log(this.tracks[4])
      console.log(data)
    });
  }

  }


