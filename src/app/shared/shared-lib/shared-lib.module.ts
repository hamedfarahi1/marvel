import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AngularMaterialModule } from './angular-material/angular-material.module';
import { SharedCommonModule } from '@shared/shared-common/shared-common.module';


@NgModule({
	declarations: [],
	imports: [
		CommonModule,
		BrowserAnimationsModule,
		HttpClientModule,
		FormsModule,
		ReactiveFormsModule,
		AngularMaterialModule
	],
	exports: [
		BrowserAnimationsModule,
		HttpClientModule,
		AngularMaterialModule,
		ReactiveFormsModule,
		FormsModule
	]
})
export class SharedLibModule { }
