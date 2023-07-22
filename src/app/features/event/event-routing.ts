import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EventPageComponent } from './containers/event-page/event-page.component';
import { ListEventsComponent } from './containers/list-events/list-events.component';
import { AuthGuard } from '../auth/auth.guard';

const routes: Routes = [
  {
    path: "Events",
    component: EventPageComponent,
    canActivate: [AuthGuard] 
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
