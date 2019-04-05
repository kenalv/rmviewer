import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {HttpClientModule} from "@angular/common/http";

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CharactersComponent } from './characters/characters.component';
import { CharacterComponent } from './characters/character/character.component';
import { EpisodeComponent } from './episode/episode.component';
import { HeaderComponent } from './header/header.component';
import { EpisodeStartComponent } from './episode/episode-start/episode-start.component';
import {ServerService} from "./server.service";
import { CharacterListComponent } from './characters/character-list/character-list.component';


@NgModule({
  declarations: [
    AppComponent,
    CharactersComponent,
    CharacterComponent,
    EpisodeComponent,
    HeaderComponent,
    EpisodeStartComponent,
    CharacterListComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [ServerService,
              ],
  bootstrap: [AppComponent]
})
export class AppModule { }
