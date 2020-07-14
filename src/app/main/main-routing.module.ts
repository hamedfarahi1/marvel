import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MainComponent } from './main.component';
import { SavedViewComponent } from './saved-view/saved-view.component';

const routes: Routes = [
  {
    path: '',
    component: MainComponent
  },
  {
    path: 'saved-view',
    component: SavedViewComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MainRoutingModule { }
