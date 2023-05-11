import { ComponentRef, Directive, inject, Input, OnInit, ViewContainerRef } from '@angular/core';
import { NgControl } from '@angular/forms';
import { ErrorsComponent } from 'src/components/errors/errors.component';

@Directive({
  selector: '[ngModel],[formControlName]'
})
export class ValidateErrormessageDirective implements OnInit {

  uiControl=inject(NgControl)

 private errorComponentRef: ComponentRef<ErrorsComponent>| null=null;

 @Input() viewContainerRef=inject(ViewContainerRef);

  constructor() { }


  ngOnInit(): void {

    this.uiControl?.control?.valueChanges.subscribe(data=>{

     if(!this.uiControl.touched || !this.uiControl.dirty){
      return;
     }

     if(this.uiControl.errors){

         if(!this.errorComponentRef){
          this.errorComponentRef=this.viewContainerRef.createComponent(ErrorsComponent);
         }
         this.errorComponentRef.setInput('errors',this.uiControl.errors);
     }else{
      this.errorComponentRef?.destroy();
      this.errorComponentRef=null;
     }
    });

  }

}
