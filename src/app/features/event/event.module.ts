import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EvenetRouting } from './event-routing';
import { EventPageComponent } from './containers/event-page/event-page.component';



@NgModule({
  declarations: [
    EventPageComponent
  ],
  imports: [
    CommonModule,
    EvenetRouting,
  ]
})
export class EventModule { }
