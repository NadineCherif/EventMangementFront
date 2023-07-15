import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EventPageComponent } from './containers/event-page/event-page.component';
import { ListEventsComponent } from './containers/list-events/list-events.component';

const routes: Routes = [
  {
    path: "Events",
    component: EventPageComponent,
  }, 
  {
    path: "list-events",
    component: ListEventsComponent,
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class EvenetRouting { }
