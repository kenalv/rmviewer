import {Component, DoCheck, OnInit} from '@angular/core';
import {ActivatedRoute, Params} from "@angular/router";
import {ServerService} from "../../server.service";
import {CharacterService} from "../character.service";

@Component({
  selector: 'app-character-list',
  templateUrl: './character-list.component.html',
  styleUrls: ['./character-list.component.css']
})
export class CharacterListComponent implements OnInit {

  page:string;
  characters: {id: number, name: string ,img: string}[];

  constructor(private route: ActivatedRoute, private serverService: ServerService, private characterService: CharacterService) { }

  ngOnInit() {
    this.route.params.subscribe((params: Params) => {
      this.page = params['page'];
      this.getPage(this.page);
    });
  }
  /*Actually, get all characters of the specific page*/
  getPage(page: string){
    this.serverService.getPage(this.page).subscribe(
      (response)=>{
        let charactersData = response.results.map((char) => {
          return {id: char['id'], name:char['name'], img: char['image']};
        });
        this.characters = charactersData;
      });
  }

}
