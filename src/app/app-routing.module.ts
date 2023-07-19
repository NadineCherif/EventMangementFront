import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomePageComponent } from './shared/components/Home/home-page/home-page.component';
import { AboutComponent } from './shared/components/AboutUs/about/about.component';
import { SponsorsComponent } from './shared/components/Sponsors/sponsors/sponsors.component';
import { ContactComponent } from './shared/components/ContactUs/contact/contact.component';
import { EventPageComponent } from './features/event/containers/event-page/event-page.component';
import { LoginComponent } from './features/auth/containers/login/login.component';
import { RegisterComponent } from './features/auth/containers/register/register.component';
import { AuthModule } from './features/auth/auth.module';
import { TicketsComponent } from './features/tickets/tickets.component';
import { ReservationComponent } from './reservation/reservation.component';


const routes: Routes = [
  
  {
  path: "Home",
  component: HomePageComponent,
},
{
  path: "About",
  component: AboutComponent,
},
{ path: "Sponsors",
component: SponsorsComponent,
},
{ path: "Contact",
component: ContactComponent,
},
{
path: "login",
component: LoginComponent,
},
{

  path: "register",
  component: RegisterComponent,
},
{

path: "Register",
component: RegisterComponent,
},

{
  path: "Ticket",
  component: TicketsComponent,
},
{path: "Reservation",
component: ReservationComponent,
}


];

@NgModule({
  imports: [
  RouterModule.forRoot(routes)],
  exports: [
  RouterModule,
  
  ]
})
export class AppRoutingModule { }
