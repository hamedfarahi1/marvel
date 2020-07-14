import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MainRoutingModule } from './main-routing.module';
import { MainComponent } from './main.component';
import { SharedModule } from '@shared/shared.module';
import { StoreModule } from '@ngrx/store';
import { filterReducer } from '@core/filter-managment/filter.reducer';
import { DetailDialogComponent } from './detail-dialog/detail-dialog.component';
import { FilterComponent } from './filter/filter.component';
import { savingReducer } from '@core/saving-managment/save.reducer';
import { SavedViewComponent } from './saved-view/saved-view.component';

@NgModule({
  declarations: [MainComponent, DetailDialogComponent, FilterComponent, SavedViewComponent],
  imports: [
    CommonModule,
    MainRoutingModule,
    SharedModule,
    StoreModule.forRoot({ 
      state: filterReducer,
      saveState: savingReducer
    })
  ],
  entryComponents: [DetailDialogComponent]
})
export class MainModule { }
