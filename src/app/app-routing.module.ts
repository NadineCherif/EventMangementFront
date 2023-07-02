import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomePageComponent } from './shared/components/Home/home-page/home-page.component';
import { AboutComponent } from './shared/components/AboutUs/about/about.component';
import { SponsorsComponent } from './shared/components/Sponsors/sponsors/sponsors.component';
import { ContactComponent } from './shared/components/ContactUs/contact/contact.component';

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
}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
