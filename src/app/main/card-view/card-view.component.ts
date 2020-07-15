import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { ICharacter } from '@core/model/character/character';

@Component({
  selector: 'app-card-view',
  templateUrl: './card-view.component.html',
  styleUrls: ['./card-view.component.scss']
})
export class CardViewComponent implements OnInit {

  @Input() item: ICharacter;
  @Input() detail?: boolean;
  @Input() unsaveOption?: boolean;
  @Output() undoSave: EventEmitter<number> = new EventEmitter();
  constructor() { }

  ngOnInit(): void {
  }

  getShortedUrl(st: string) {
    return st.substr(0,40)+ '  ...';
  }

    /**
   * short the string in 10 characters
   * @param st 
   */
  getSubtitle(st: string) {
    return st.substr(0, 10) + ' ...';
  }

  // emit unSave func in save-view component
  unSave(id: number, event) {
    event.preventDefault();
    this.undoSave.emit(id);
  }

}
