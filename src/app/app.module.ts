import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AuthModule } from './features/auth/auth.module';
import { EventModule } from './features/event/event.module';
import { CoreModule } from './core/core.module';
import {TokenInterceptor} from "./core/interceptors/token.interceptor";
import {HTTP_INTERCEPTORS, HttpClientModule} from "@angular/common/http";
import { IonicModule } from '@ionic/angular';
import { AboutComponent } from './shared/components/AboutUs/about/about.component';
import { HomePageComponent } from './shared/components/Home/home-page/home-page.component';
import { FormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';



import { EventPageComponent } from './features/event/containers/event-page/event-page.component';
import { AuthRouting } from './features/auth/auth-routing';
import { ReservationModule } from './features/reservation/reservation-module';


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    CoreModule,
    AppRoutingModule,
   AuthModule,
    EventModule,
    IonicModule.forRoot(),
    BrowserAnimationsModule,
    FormsModule,
    ReservationModule
   
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
