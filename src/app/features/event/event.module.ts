import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EvenetRouting } from './event-routing';
import { EventPageComponent } from './containers/event-page/event-page.component';
import { HomePageComponent } from 'src/app/shared/components/Home/home-page/home-page.component';
import { LoginComponent } from '../auth/containers/login/login.component';
import { AuthModule } from '../auth/auth.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ListEventsComponent } from './containers/list-events/list-events.component';



@NgModule({
  declarations: [
    EventPageComponent,HomePageComponent, ListEventsComponent
  ],
  imports: [
    CommonModule,
    EvenetRouting,
    ReactiveFormsModule,
    FormsModule
    
    
  ]
})
export class EventModule { }
