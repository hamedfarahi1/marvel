import { Component, OnInit, OnDestroy } from '@angular/core';
import { Store, select } from '@ngrx/store';
import { ICharacter } from '@core/model/character/character';
import { Observable, Subscription } from 'rxjs';
import { MatDialog, MatDialogConfig } from '@angular/material';
import { DetailDialogComponent } from '../detail-dialog/detail-dialog.component';
import { isPresent } from '@core/typings/optional';
import { UnsaveCharacter } from '@core/saving-managment/save.actions';

@Component({
  selector: 'app-saved-view',
  templateUrl: './saved-view.component.html',
  styleUrls: ['./saved-view.component.scss']
})
export class SavedViewComponent implements OnInit, OnDestroy {

  saveState_: Observable<ICharacter[]>;
  stateObs: Subscription;
   constructor(
    private matDialog: MatDialog,
    private store: Store<{saveState: ICharacter[]}>) { 
      this.saveState_ = store.pipe(select('saveState'))
    }

  ngOnInit() {}

  onItemClick(id: number) {
    const config: MatDialogConfig = {
      disableClose: true
    }
    const dialog = this.matDialog.open(DetailDialogComponent, config);
    dialog.componentInstance.id = id;
  }

  unSave(id: number) {
    this.store.dispatch(new UnsaveCharacter(id));
  }

  ngOnDestroy() {
    if (isPresent(this.stateObs))
      this.stateObs.unsubscribe()
  }
}
