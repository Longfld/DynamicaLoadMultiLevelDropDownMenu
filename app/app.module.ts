import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';


import { AppComponent }  from './app.component';
import { routing }        from './app.routing';
import { MyRouterLink} from './MyRouterLink';


@NgModule({
  imports:      [ BrowserModule, HttpClientModule, routing ],
  declarations: [ AppComponent,MyRouterLink ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
