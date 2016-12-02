
import {
  NgModule, Component, ViewContainerRef, Compiler,
  ComponentFactory, ComponentRef, ViewChild, OnDestroy, AfterViewInit, ChangeDetectionStrategy,
  Output, EventEmitter
} from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { DataServices } from './DataServices';

@Component({
  selector: 'my-router-link',
  template: '<div #mymenu></div>',
  // changeDetection: ChangeDetectionStrategy.OnPush,
  providers: [DataServices]
})

export class MyRouterLink implements OnDestroy, AfterViewInit {
  @ViewChild('mymenu', { read: ViewContainerRef }) target: ViewContainerRef;
  @Output() onMenusOK = new EventEmitter<boolean>();
  private cmpRef: ComponentRef<any>;

  constructor(private dataServices: DataServices, private compiler: Compiler, private _viewContainerRef: ViewContainerRef) { }

  ngAfterViewInit() {
    if (this.cmpRef) {
      this.cmpRef.destroy();
    }
    this.dataServices.GetMenuLinks()
      .subscribe(returnedmenu =>
        (
          (this.compileToComponent(returnedmenu)).then((factory: ComponentFactory<any>) => {
            this.cmpRef = this.target.createComponent(factory);
            if (this.cmpRef) { setTimeout(() => { this.onMenusOK.emit(true), 1 }); }
          })
        ),
      error => console.log(<any>error)
      );
  }

  ngOnDestroy() {
    if (this.cmpRef) {
      this.cmpRef.destroy();
    }
  }

  private compileToComponent(template1: string): Promise<ComponentFactory<any>> {

    @Component({
      template: template1,

    })
    class DynamicComponent {

    }
    @NgModule({
      imports: [BrowserModule, RouterModule],
      declarations: [DynamicComponent]
    })
    class DynamicModule { }

    return this.compiler.compileModuleAndAllComponentsAsync(DynamicModule).then(
      factory => factory.componentFactories.find(x => x.componentType === DynamicComponent)
    )
  }
}
