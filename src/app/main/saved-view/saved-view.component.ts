import { Component, OnInit, OnDestroy } from '@angular/core';
import { Store, select } from '@ngrx/store';
import { ICharacter } from '@core/model/character/character';
import { Observable, Subscription } from 'rxjs';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { isPresent } from '@core/typings/optional';
import { UnsaveCharacter } from '@core/saving-managment/save.actions';
import { DialogComponent } from '../dialog/dialog.component';
import { DetailComponent } from '../detail/detail.component';

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
      disableClose: true,
      data:{
        component: DetailComponent,
        id: id
      }
    }
    this.matDialog.open(DialogComponent, config);
  }

  unSave(id: number) {
    this.store.dispatch(new UnsaveCharacter(id));
  }

  ngOnDestroy() {
    if (isPresent(this.stateObs))
      this.stateObs.unsubscribe()
  }
}
