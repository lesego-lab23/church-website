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
import { CalendarDays, Clock, Facebook, Heart, Instagram, LucideAngularModule, Mail, MapPin, Menu, Phone, Twitter, X, Youtube } from 'lucide-angular';
import { ArrowUp, Building, Copy, CreditCard } from 'lucide-angular';
import { RevealDirective } from './reveal.directive';
import { LocationMapComponent } from './components/location-map/location-map.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    EventsComponent,
    NavbarComponent,
    ContactComponent,
    ServicesComponent,
    GivingComponent,
    LocationMapComponent,
    RevealDirective
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    LucideAngularModule.pick({ ArrowUp, Copy, Building, CreditCard, Phone, Mail, MapPin, Clock, CalendarDays, Facebook, Instagram, Youtube, Twitter, Heart, Menu, X }),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
