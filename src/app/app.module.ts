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
import { ReservationComponent } from './reservation/reservation.component';

@NgModule({
  declarations: [
    AppComponent,
    ReservationComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    CoreModule,
    AppRoutingModule,
    AuthModule,
    EventModule,
    IonicModule.forRoot(),
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
