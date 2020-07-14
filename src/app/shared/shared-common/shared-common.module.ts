import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoadingDirective } from './loading-directive/loading-directive';
import { SpinnerComponent } from './spinner-component/spinner.component';
import { SharedLibModule } from '@shared/shared-lib/shared-lib.module';
import { SpinnerResloverComponent } from './spinner-resolver-component/spinner-resolver.component';

@NgModule({
  declarations: [LoadingDirective, SpinnerComponent, SpinnerResloverComponent],
  imports: [
    CommonModule,
    SharedLibModule
  ],
  entryComponents: [SpinnerComponent],
  exports:[LoadingDirective, SpinnerComponent, SpinnerResloverComponent]
})
export class SharedCommonModule { }
