import { Component, OnInit, Input, OnDestroy } from '@angular/core';
import { CharacterService } from '@core/service/character/character.service';
import { Subscription, Observable } from 'rxjs';
import { ICharacter } from '@core/model/character/character';
import { Store, select } from '@ngrx/store';
import { SaveCharacter } from '@core/saving-managment/save.actions';
import { isPresent } from '@core/typings/optional';

@Component({
  selector: 'app-detail-dialog',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.scss']
})
export class DetailComponent implements OnInit, OnDestroy {

  @Input()
  id: number;

  isLoading: boolean = true;
  // subscribtions props only for unsubscribe in ngOnDestroy
  resultObs: Subscription;

  isSaved: boolean = false;
  saveState_: Observable<ICharacter[]>;
  item: ICharacter;
  stateObs: Subscription;
  
  constructor(
    private store: Store<{saveState: ICharacter[]}>,
    private characterService: CharacterService) {
      this.saveState_ = store.pipe(select('saveState'));
    }

  ngOnInit() {
    this.init();
  }

  init() {
    this.getItem();
    this.stateObs = this.saveState_.subscribe(items => {
      items.forEach(itm => { if(itm.id === this.id) this.isSaved = true})
    })
  }
  getItem() {
    this.isLoading = true;
    // get one character to show that in dialog from id thar recived from main component
    this.resultObs = this.characterService.find(this.id).subscribe(res => {
      let results = res.data.results;
      if(results[0])
        this.item = results[0];
      this.isLoading = false;
    }, () => this.isLoading = false)
  }

  getShortedUrl(st: string) {
    return st.substr(0,40)+ '  ...';
  }

  onSave() {
    this.store.dispatch(new SaveCharacter(this.item));
  }

  ngOnDestroy() {
    if (isPresent(this.resultObs))
      this.resultObs.unsubscribe();
    if (isPresent(this.stateObs))
      this.stateObs.unsubscribe();
  }
}
