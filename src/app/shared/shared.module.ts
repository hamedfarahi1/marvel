import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedLibModule } from './shared-lib/shared-lib.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SharedCommonModule } from './shared-common/shared-common.module';

/* 				*** SHARED MODULE (from angular.io) ***
 * SharedModule is a conventional name for an NgModule with the components, directives,
 * and pipes that you use everywhere in your app.
 * This module should consist entirely of declarations, most of them exported.
 * The SharedModule may re-export other widget modules, such as CommonModule, FormsModule,
 * and NgModules with the UI controls that you use most widely.
 * The SharedModule should not have providers for reasons explained previously.
 * Nor should any of its imported or re-exported modules have providers.
 * Import the SharedModule in your feature modules, both those loaded when the app starts
 *  and those you lazy load later.
*/
@NgModule({
	declarations: [],
	imports: [
		CommonModule
	],
	exports: [
		FormsModule,
		ReactiveFormsModule,
		SharedLibModule,
		SharedCommonModule
		]
})
export class SharedModule { }
