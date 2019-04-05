import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {map} from "rxjs/operators";

@Injectable()
export class ServerService {

  private pagData: {pages:number,next:string,prev:string,results:[]};




  constructor(private httpClient: HttpClient) {
  }
  private extractPagData(res: any) {
    return this.pagData = {pages: res.info.pages, next: res.info.next , prev: res.info.prev,results:res.results}
  }
  private extractCharData(res: any) {
    return {img:res.image,
      name: res.name,
      status: res.status,
      species: res.species,
      type: res.type,
      gender: res.gender,
      origin: res.origin.name,
      location: res.location.name,
      episodes: res.episode};
  }
  private extractEpisodeData(res: any) {
    return {
      name: res.name,
      air_date: res.air_date,
      episode: res.episode,
      characters: res.characters
    };
  }
  private extractMultipleEpisodeCharacters(res: any){
    return {results:res};
  }
  /**
   * Function to GET page DATA
   */
  public getPaginationData(): Observable<any> {
    // Call the http GET
    return this.httpClient.get('https://rickandmortyapi.com/api/character/').pipe(map(this.extractPagData));
  }

  public getPage(page:string):Observable<any>{
    return this.httpClient.get('https://rickandmortyapi.com/api/character/?page='+page).pipe(map(this.extractPagData));
  }

  public getCharacterData(id:string):Observable<any>{
    return this.httpClient.get('https://rickandmortyapi.com/api/character/' + id).pipe(map(this.extractCharData))
  }

  public getEpisodeData(id:string):Observable<any>{
    return this.httpClient.get('https://rickandmortyapi.com/api/episode/' + id).pipe(map(this.extractEpisodeData))
  }
  public getMultipleCharacters(ids:string):Observable<any>{
    return this.httpClient.get('https://rickandmortyapi.com/api/character/' + ids).pipe(map(this.extractMultipleEpisodeCharacters))
  }
}
