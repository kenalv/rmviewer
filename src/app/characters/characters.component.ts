import {
  Component,
  DoCheck, Input,
  OnInit
} from '@angular/core';
import {ServerService} from "../server.service";
import {Router, RouterLink} from "@angular/router";


@Component({
  selector: 'app-characters',
  templateUrl: './characters.component.html',
  styleUrls: ['./characters.component.css']
})

export class CharactersComponent implements OnInit,DoCheck {

  paginationData:{};
  pagArray:any;
  @Input() id:number;



  constructor(private serverService: ServerService, private router: Router) { }
  ngOnInit() {
    this.serverService.getPaginationData().subscribe(
        (response) => {
         const data = response;
         this.paginationData = data;
        },
          error => {
          console.log(error);
          }
      );

    }

  ngDoCheck(): void {
    if(this.paginationData){
      this.pagArray = Array.from({ length: +this.paginationData['pages']}, (_, i:number = 0) => i+1);
    }
  }

  onCharacterSelected(){

  }

}
