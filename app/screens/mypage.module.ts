import {Component} from '@angular/core';
import { NgModule }           from '@angular/core';
import { Routes, RouterModule }  from '@angular/router';

@Component({
    template: `
    <h1>My page</h1>
    This is the page I am looking for
    `
})
class Mypage { }

const routes: Routes = [{ path: '', component: Mypage}];

@NgModule({
  imports: [  RouterModule.forChild(routes) ],
  declarations: [ Mypage]
})
export default class MypageModule { }
