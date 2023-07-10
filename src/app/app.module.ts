import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AuthModule } from './features/auth/auth.module';
import { EventModule } from './features/event/event.module';
import { ReservationModule } from './features/reservation/reservation.module';
import { CoreModule } from './core/core.module';
import {TokenInterceptor} from "./core/interceptors/token.interceptor";
import {HTTP_INTERCEPTORS, HttpClientModule} from "@angular/common/http";
import { IonicModule } from '@ionic/angular';
import { AboutComponent } from './shared/components/AboutUs/about/about.component';
import { HomePageComponent } from './shared/components/Home/home-page/home-page.component';
<<<<<<< HEAD
import { adapterFactory } from 'angular-calendar/date-adapters/date-fns';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { TicketsComponent } from './shared/components/tickets/tickets.component';
=======
import { EventPageComponent } from './features/event/containers/event-page/event-page.component';
import { LoginComponent } from './features/auth/containers/login/login.component';
import { AuthRouting } from './features/auth/auth-routing';
>>>>>>> 0ac2d2dcdf4ef04df9ae072d1bf43c7fde6e5d09


@NgModule({
  declarations: [
    AppComponent,
    
<<<<<<< HEAD
=======

>>>>>>> 0ac2d2dcdf4ef04df9ae072d1bf43c7fde6e5d09
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    CoreModule,
    AppRoutingModule,
    AuthModule,
    EventModule,
    ReservationModule,
    IonicModule.forRoot(),
    BrowserAnimationsModule,
   
  ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: TokenInterceptor,
      multi: true
    }
  ],
  bootstrap: [AppComponent
  ]

//schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class AppModule { }
