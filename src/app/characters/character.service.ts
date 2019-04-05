import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CharacterService {

  characters: {id:number,name:string,img:string}[];

  constructor() { }

  chargeCharList(results:[]){
      console.log(results);
      // let tempArray = results.map((character) => {
      //     return {id:character['id'],name:character['name'],img: character['image']};
      // });
      // this.characters = tempArray;
  }



}
