import { ComponentFactoryResolver, Directive, ElementRef, Input, Renderer2, ViewContainerRef } from '@angular/core';
import { SpinnerComponent } from '../spinner-component/spinner.component';

@Directive({
	selector: '[appLoading]'
})
export class LoadingDirective {
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
	public set appLoading(isLoading: boolean) {
		if (!isLoading) {
			this.showContent();
		} else {
			this.showLoading();
		}
	}

}
