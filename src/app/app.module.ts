import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { EventsComponent } from './components/events/events.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { ContactComponent } from './components/contact/contact.component';
import { ServicesComponent } from './components/services/services.component';
import { GivingComponent } from './components/giving/giving.component';
import { Clock, Facebook, Instagram, LucideAngularModule, Mail, MapPin, Phone, Twitter, Youtube } from 'lucide-angular';
import { Building, Copy, CreditCard } from 'lucide-angular';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    EventsComponent,
    NavbarComponent,
    ContactComponent,
    ServicesComponent,
    GivingComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    LucideAngularModule.pick({ Copy, Building, CreditCard, Phone, Mail, MapPin, Clock, Facebook, Instagram, Youtube, Twitter }),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
