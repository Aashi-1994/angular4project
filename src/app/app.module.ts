import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms'


import { AppComponent } from './app.component';

import { UserformComponent } from './userform/userform.component';
import { UserdetailsComponent } from './userdetails/userdetails.component';
import { AboutComponent } from './about/about.component';
import { RedcolorDirective } from './redcolor.directive';

import { ServiceComponent } from './service/service.component';
import { ContactComponent } from './contact/contact.component';
import { RouterModule } from  '@angular/router';
import {DataService} from './services/data.service'; 
import{HttpModule} from '@angular/http';


@NgModule({
  declarations: [
    AppComponent,
    UserformComponent,
    UserdetailsComponent,
    AboutComponent,
    RedcolorDirective,
    ServiceComponent,
    ContactComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,

    RouterModule.forRoot([
    {
      path:'about',
      component: AboutComponent
    },
      {
      path:'service',
      component:ServiceComponent
    },
      {
      path:'contact',
      component:  ContactComponent 
    },

    ])
   
  ],
  providers: [DataService],
  bootstrap: [AppComponent]
})
export class AppModule { }
