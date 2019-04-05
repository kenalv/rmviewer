import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { EpisodeComponent } from './episode/episode.component';
import { CharactersComponent } from './characters/characters.component';
import {CharacterComponent} from "./characters/character/character.component";
import {EpisodeStartComponent} from "./episode/episode-start/episode-start.component";
import {CharacterListComponent} from "./characters/character-list/character-list.component";


const appRoutes: Routes = [
  {path: '', redirectTo: '/characters', pathMatch: 'full'},
  {path: 'characters', component: CharactersComponent, children: [
      {path: ':page', component:CharacterListComponent}
    ]},
  {path: 'character/:id', component:CharacterComponent},
  {path: 'episode/:id', component: EpisodeComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(appRoutes)],
  exports: [RouterModule]
})


export class AppRoutingModule{

}
