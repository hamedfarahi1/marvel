import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MainRoutingModule } from './main-routing.module';
import { MainComponent } from './main.component';
import { SharedModule } from '@shared/shared.module';
import { StoreModule } from '@ngrx/store';
import { filterReducer } from '@core/filter-managment/filter.reducer';
import { FilterComponent } from './filter/filter.component';
import { savingReducer } from '@core/saving-managment/save.reducer';
import { SavedViewComponent } from './saved-view/saved-view.component';
import { DetailComponent } from './detail/detail.component';
import { DialogComponent } from './dialog/dialog.component';

@NgModule({
  declarations: [MainComponent, DetailComponent, FilterComponent, SavedViewComponent, DialogComponent],
  imports: [
    CommonModule,
    MainRoutingModule,
    SharedModule,
    StoreModule.forRoot({ 
      state: filterReducer,
      saveState: savingReducer
    })
  ],
  entryComponents: [DialogComponent, DetailComponent]
})
export class MainModule { }
