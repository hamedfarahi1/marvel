import { NgModule } from '@angular/core';
import {MatGridListModule} from '@angular/material/grid-list';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatDialogModule } from '@angular/material/dialog';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatListModule } from '@angular/material/list';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatTooltipModule } from '@angular/material/tooltip';
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
		MatAutocompleteModule,
		MatToolbarModule
	]
})
export class AngularMaterialModule { }
