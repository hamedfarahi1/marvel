import { ComponentFactoryResolver, Directive, ElementRef, Input, Renderer2, ViewContainerRef } from '@angular/core';
import { SpinnerComponent } from '../spinner-component/spinner.component';
import { Optional, isPresent } from '@core/typings/optional';

@Directive({
	selector: '[appLoading]'
})
export class LoadingDirective<T> {
	constructor(private viewContainerRef: ViewContainerRef,
		private renderer: Renderer2,
		private element: ElementRef,
		private cfr: ComponentFactoryResolver) {
	}

	showLoading(): void {
		this.renderer.addClass(this.element.nativeElement, 'hidden');
		const cmpFactory = this.cfr.resolveComponentFactory(SpinnerComponent);
		this.viewContainerRef.createComponent(cmpFactory);

	}

	showContent(): void {
		this.renderer.removeClass(this.element.nativeElement, 'hidden');
		this.viewContainerRef.remove(0);
	}

	@Input()
	public set appLoading(deferredData: Optional<T>) {
		if (isPresent(deferredData)) {
			this.showContent();
		} else {
			this.showLoading();
		}
	}

}
