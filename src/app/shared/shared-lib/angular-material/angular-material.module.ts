import { NgModule } from '@angular/core';
import {MatGridListModule} from '@angular/material/grid-list';
import {MatCardModule, MatButtonModule, MatPaginatorModule, MatDialogModule, MatListModule, MatTooltipModule, MatIconModule, MatProgressSpinnerModule, MatInputModule} from '@angular/material'
import {MatDividerModule} from '@angular/material/divider';
import {MatAutocompleteModule} from '@angular/material/autocomplete';

@NgModule({
	exports: [
		MatGridListModule,
		MatCardModule,
		MatButtonModule,
		MatPaginatorModule,
		MatDialogModule,
		MatDividerModule,
		MatListModule,
		MatTooltipModule,
		MatIconModule,
		MatProgressSpinnerModule,
		MatInputModule,
		MatAutocompleteModule
	]
})
export class AngularMaterialModule { }
