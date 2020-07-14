import { Component, OnInit, Input, Inject, ComponentRef, ViewChild, ViewContainerRef, ComponentFactoryResolver, OnDestroy } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { ComponentPortal } from '@angular/cdk/portal';

@Component({
  selector: 'app-dialog',
  templateUrl: './dialog.component.html',
  styleUrls: ['./dialog.component.scss']
})
export class DialogComponent implements OnInit, OnDestroy {

  @ViewChild('target', { read: ViewContainerRef }) vcRef: ViewContainerRef;

  componentRef: ComponentRef<any>;

  constructor(
    private resolver: ComponentFactoryResolver,
    public dialogRef: MatDialogRef<DialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any) { }

  ngOnInit() {
    this.dialogRef.updatePosition({
      left: '16px'
    })
    const factory = this.resolver.resolveComponentFactory(this.data.component);
    this.componentRef = this.vcRef.createComponent(factory);
    this.componentRef.instance.id = this.data.id;
  }

  ngOnDestroy() {
    if (this.componentRef) {
      this.componentRef.destroy();
    }
  }  

}
