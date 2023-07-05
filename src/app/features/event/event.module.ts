import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EvenetRouting } from './event-routing';
import { EventPageComponent } from './containers/event-page/event-page.component';
import { HomePageComponent } from 'src/app/shared/components/Home/home-page/home-page.component';
import { LoginComponent } from '../auth/containers/login/login.component';



@NgModule({
  declarations: [
    EventPageComponent,HomePageComponent
  ],
  imports: [
    CommonModule,
    EvenetRouting,
    
  ]
})
export class EventModule { }
