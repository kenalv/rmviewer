import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Params} from "@angular/router";
import {ServerService} from "../server.service";


@Component({
  selector: 'app-episode',
  templateUrl: './episode.component.html',
  styleUrls: ['./episode.component.css']
})
export class EpisodeComponent implements OnInit {
  epID: string;
  episode: {name:string, air_date:string, episode:string, characters:[]};
  episodeCharacters:{id:string,name:string,img:string}[];


  constructor(private serverService: ServerService, private route: ActivatedRoute) { }

  ngOnInit() {
    this.route.params.subscribe((params: Params) => {
      this.epID = params['id'];
      this.getEpisode(this.epID);
    });
  }

  getEpisode(id: string){
    this.serverService.getEpisodeData(id).subscribe(
      (response)=>{
        const episodeData = response;
       // console.log(episodeData);
         this.episode = episodeData;
         let episodeCharacters = response.characters.map((character) => {
           return character.split("/").pop();
         });
         this.episode.characters = episodeCharacters;

          this.getEpisodeCharacters(this.episode.characters.toString());
         //console.log(this.episode.characters.toString());
      });
  }

  getEpisodeCharacters(charactersIDs: string){
    this.serverService.getMultipleCharacters(charactersIDs).subscribe(
      (response)=>{
        let charactersData = response.results.map((char) => {
          return {id: char['id'], name:char['name'], img: char['image']};
        });
       this.episodeCharacters = charactersData;
      });
    //console.log(character);
  }

}
