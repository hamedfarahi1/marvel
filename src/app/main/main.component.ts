import { Component, OnInit, OnDestroy } from '@angular/core';
import { CharacterService } from '@core/service/character/character.service';
import { ICreatorDataWrapper } from '@core/model/creators/creator-data-wrapper';
import { ICharacter } from '@core/model/character/character';
import { IState } from '@core/filter-managment/state-model';
import { Store, select } from '@ngrx/store';
import { Observable, Subscription } from 'rxjs';
import { SetPage, ReturnFilters, SetFilters } from '@core/filter-managment/filter.actions';
import { KeyValue } from '@angular/common';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent implements OnInit, OnDestroy {

  items: ICharacter[];
  state_: Observable<IState>;
  filters: KeyValue<string, string>[];
  totalCount: number;

  stateObs: Subscription;
  resultObs: Subscription;
  constructor(private characterService: CharacterService, private store: Store<{state: IState}>) { 
    this.state_ = store.pipe(select('state'))
  }

  ngOnInit() {
    this.stateObs = this.state_.subscribe(res=> {
      this.resultObs = this.getData(res);
    })
  }

  getData(res: IState) {
    return this.characterService.read(res.page, res.pageSize, res.orderBy, res.filter).subscribe((res: ICreatorDataWrapper) => {
      this.totalCount = res.data.total;
      this.items = res.data.results})
  }

  getSubtitle(st: string) {
    return st.substr(0, 10) + ' ...';
  }

  
  setPage(event) {
    this.store.dispatch(new SetPage(event.pageIndex));
  }

  setFilters() {
    this.store.dispatch(new SetFilters(this.filters));
  }

  returnFilters() {
    this.store.dispatch(new ReturnFilters());
  }

  ngOnDestroy() {
    this.stateObs.unsubscribe();
    this.resultObs.unsubscribe();
  }

}
