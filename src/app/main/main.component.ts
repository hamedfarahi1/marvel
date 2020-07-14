import { Component, OnInit } from '@angular/core';
import { CharacterService } from '@core/service/character/character.service';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.sass']
})
export class MainComponent implements OnInit {

  constructor(private characterService: CharacterService) { }

  ngOnInit() {
    this.characterService.readAll([]).subscribe(res => console.log(res))
  }

}
