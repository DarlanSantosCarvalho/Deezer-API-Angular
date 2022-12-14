import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {HttpClientModule} from '@angular/common/http'
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { Musica1Component } from './musica1/musica1.component';
import { RouterModule, Routes } from '@angular/router';
import { Musica2Component } from './musica2/musica2.component';
import { Musica3Component } from './musica3/musica3.component';
import { Musica4Component } from './musica4/musica4.component';
import { Musica5Component } from './musica5/musica5.component';


const appRoute : Routes = [
  {path: 'Home', component: AppComponent},
  {path: 'musica1', component: Musica1Component},
  {path: 'musica2', component: Musica2Component},
  {path: 'musica3', component: Musica3Component},
  {path: 'musica4', component: Musica4Component},
  {path: 'musica5', component: Musica5Component}
]

@NgModule({
  declarations: [
    AppComponent,
    Musica1Component,
    Musica2Component,
    Musica3Component,
    Musica4Component,
    Musica5Component,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    RouterModule.forRoot(appRoute)
  ],
  providers: [],
  bootstrap: [AppComponent]
})

export class AppModule { }
