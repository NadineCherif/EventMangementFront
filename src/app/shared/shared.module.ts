import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomePageComponent } from './components/Home/home-page/home-page.component';
import { AboutComponent } from './components/AboutUs/about/about.component';
import { SponsorsComponent } from './components/Sponsors/sponsors/sponsors.component';
import { ContactComponent } from './components/ContactUs/contact/contact.component';
import { BrowserModule } from '@angular/platform-browser';
import { EventModule } from '../features/event/event.module';
import { EventPageComponent } from '../features/event/containers/event-page/event-page.component';
import { LoginComponent } from '../features/auth/containers/login/login.component';
import { AuthModule } from '../features/auth/auth.module';
import { AuthRouting } from '../features/auth/auth-routing';
import { TicketsComponent } from './components/tickets/tickets.component';




@NgModule({
  declarations: [
    AboutComponent,
    SponsorsComponent,
    ContactComponent,

    TicketsComponent
  ],
  imports: [
    CommonModule,BrowserModule,
  ]
})
export class SharedModule { }
