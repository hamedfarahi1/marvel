import { Component, OnInit, Input } from '@angular/core';
import { CharacterService } from '@core/service/character/character.service';
import { Subscription } from 'rxjs';
import { ICharacter } from '@core/model/character/character';
import { MatDialogRef } from '@angular/material';

@Component({
  selector: 'app-detail-dialog',
  templateUrl: './detail-dialog.component.html',
  styleUrls: ['./detail-dialog.component.scss']
})
export class DetailDialogComponent implements OnInit {

  @Input()
  id: number;

  resultObs: Subscription;
  item: ICharacter;
  constructor(private characterService: CharacterService,private dialogRef: MatDialogRef<DetailDialogComponent>) { }

  ngOnInit() {
    this.init();
  }

  init() {
    this.dialogRef.updatePosition({
      left: '16px'
    })
    this.getItem();
  }
  getItem() {
    this.resultObs = this.characterService.find(this.id).subscribe(res => {
      let results = res.data.results;
      if(results[0])
        this.item = results[0];
    })
  }

  getShortedUrl(st: string) {
    return st.substr(0,40)+ '  ...';
  }
}
