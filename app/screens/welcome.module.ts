import {Component, NgModule }    from '@angular/core';
import { Routes, RouterModule }  from '@angular/router';


@Component({
    templateUrl: "<h1>welcome</h1> welcome"
})
class Welcome { }

const routes: Routes = [{ path: '', component: Welcome}];

@NgModule({
  imports: [RouterModule.forChild(routes) ],
  declarations: [ Welcome]
})
export default class WelcomeModule { }
