import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Params} from "@angular/router";
import {ServerService} from "../../server.service";

@Component({
  selector: 'app-character',
  templateUrl: './character.component.html',
  styleUrls: ['./character.component.css']
})
export class CharacterComponent implements OnInit {
  /* Character Model */
  characterID:string;
  character: {img:string,
              name:string,
              status:string,
              species: string,
              type: string,
              gender:string,
              origin:string,
              location:string,
              episodes:{id:string,url:string}[]};

  constructor(private route: ActivatedRoute, private serverService: ServerService) { }

  ngOnInit() {
    this.route.params.subscribe((params: Params) => {
      this.characterID = params['id'];
      this.getCharacter(this.characterID);
    });
  }

  getCharacter(characterID: string){
    this.serverService.getCharacterData(characterID).subscribe(
      (response)=>{
        const charactersData = response;
        this.character = charactersData;
        let episodes = response.episodes.map((ep) => {
          return {id: ep.split("/").pop(), url:ep};
        });
        this.character.episodes = episodes;
      });
  }

}
