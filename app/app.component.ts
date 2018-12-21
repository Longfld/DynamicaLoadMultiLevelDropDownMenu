import { AfterViewChecked,Component } from '@angular/core';

declare var $: any;

@Component({
  selector: 'my-app',
  template: `
     <my-router-link (onMenusOK)="onMenusOK($event)"></my-router-link>
    <router-outlet></router-outlet>
  `
})
export class AppComponent implements AfterViewChecked {

    private menuCompleted: boolean = false;
    private SmartMenuCompleted: boolean = false;

     onMenusOK(completed: boolean) { this.menuCompleted = true;}

    ngAfterViewChecked() {
       if (this.menuCompleted && !this.SmartMenuCompleted) {
            $('#main-menu').smartmenus();
            this.mainMenuCompleted = true;
        } 
    }
}
