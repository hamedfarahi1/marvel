import { Component, OnInit, OnDestroy } from '@angular/core';
import { CharacterService } from '@core/service/character/character.service';
import { ICreatorDataWrapper } from '@core/model/creators/creator-data-wrapper';
import { ICharacter } from '@core/model/character/character';
import { IState } from '@core/filter-managment/state-model';
import { Store, select } from '@ngrx/store';
import { Observable, Subscription } from 'rxjs';
import { SetPage, ReturnFilters } from '@core/filter-managment/filter.actions';
import { KeyValue } from '@angular/common';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { isPresent } from '@core/typings/optional';
import { DialogComponent } from './dialog/dialog.component';
import { DetailComponent } from './detail/detail.component';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent implements OnInit, OnDestroy {

  // array of characters
  items: ICharacter[];
  state_: Observable<IState>;
  filters: KeyValue<string, string>[];

  isLoading: boolean = true;
  // props for paginator's usage
  totalCount: number;
  pageIndex: number;

  // subscribtions props only for unsubscribe in ngOnDestroy
  stateObs: Subscription;
  resultObs: Subscription;

  constructor(
    private matDialog: MatDialog,
    private characterService: CharacterService, 
    private store: Store<{state: IState}>) { 
    this.state_ = store.pipe(select('state'))
  }

  ngOnInit() {

    // listening to state changes
    this.stateObs = this.state_.subscribe(res=> {
      this.pageIndex = res.page / 3;
      this.resultObs = this.getData(res);
    })
  }

  /**
   * get list of characters that filters obj (res)
   * @param res 
   */
  getData(res: IState) {
    return this.characterService.read(res.page, res.pageSize, res.orderBy, res.filter).subscribe((res: ICreatorDataWrapper) => {
      this.totalCount = res.data.total;
      this.items = res.data.results
      this.isLoading = false;
    }, () => this.isLoading = false)
  }

  /**
   * short the string in 10 characters
   * @param st 
   */
  getSubtitle(st: string) {
    return st.substr(0, 10) + ' ...';
  }

  /**
   * open dialog for view a character detail 
   * @param id 
   */
  onItemClick(id: number) {
    const config: MatDialogConfig = {
      disableClose: true,
      data:{
        component: DetailComponent,
        id: id
      }
    }
    this.matDialog.open(DialogComponent, config);
  }

  /**
   * set page that returned by paginator to state
   * @param event 
   */
  setPage(event) {

    // for destroy last items
    this.isLoading = true;

    this.store.dispatch(new SetPage(event.pageIndex));
  }

  returnFilters() {
    this.store.dispatch(new ReturnFilters());
  }

  ngOnDestroy() {
    if (isPresent(this.stateObs))
      this.stateObs.unsubscribe();
    if (isPresent(this.resultObs))
      this.resultObs.unsubscribe();
  }
}
