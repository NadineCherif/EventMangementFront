import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EventPageComponent } from './containers/event-page/event-page.component';

const routes: Routes = [
  {
    path: "Events",
    component: EventPageComponent,
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class EvenetRouting { }
