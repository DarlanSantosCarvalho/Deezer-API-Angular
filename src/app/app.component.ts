import { Component, OnInit} from '@angular/core';
import { HttpClient } from "@angular/common/http";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  conteudoSalvo: string = '';
  tracks: any = [];
  cover: any = [];
  constructor(private http: HttpClient){

  }

  onSave(valor:string){
    this.conteudoSalvo = valor;
    console.log(valor)
  }

  ngOnInit(): void {
      this.getMethodPlaylists();
      this.getMethodSearch();

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

  public async getMethodSearch(){
    const options = {
      method: 'GET',
      url: 'https://deezerdevs-deezer.p.rapidapi.com/search',
      params: {q: 'Eminem' ,"limit": 1}, // Usar event binding no parametro da função e usar o mesmo parametro na querie
      headers: {
        'X-RapidAPI-Key': '00409c6540msh20ba7d743bf8d70p10020djsnb1ca8717e8c6',
        'X-RapidAPI-Host': 'deezerdevs-deezer.p.rapidapi.com'
      }
    };
    this.http.get(`https://deezerdevs-deezer.p.rapidapi.com/search`, options).subscribe((data:any) =>{
      console.log(data)
  })
  }

  }


