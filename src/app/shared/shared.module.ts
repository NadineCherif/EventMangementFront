import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomePageComponent } from './components/Home/home-page/home-page.component';
import { AboutComponent } from './components/AboutUs/about/about.component';
import { SponsorsComponent } from './components/Sponsors/sponsors/sponsors.component';
import { ContactComponent } from './components/ContactUs/contact/contact.component';



@NgModule({
  declarations: [
    HomePageComponent,
    AboutComponent,
    SponsorsComponent,
    ContactComponent
  ],
  imports: [
    CommonModule
  ]
})
export class SharedModule { }
