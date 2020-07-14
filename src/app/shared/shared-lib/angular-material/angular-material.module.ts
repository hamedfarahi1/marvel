import { NgModule } from '@angular/core';
import {MatGridListModule} from '@angular/material/grid-list';
import {MatCardModule, MatButtonModule, MatPaginatorModule} from '@angular/material'

@NgModule({
	exports: [
		MatGridListModule,
		MatCardModule,
		MatButtonModule,
		MatPaginatorModule
	]
})
export class AngularMaterialModule { }
