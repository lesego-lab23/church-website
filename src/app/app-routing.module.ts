import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { EventsComponent } from './components/events/events.component';
import { ContactComponent } from './components/contact/contact.component';
import { ServicesComponent } from './components/services/services.component';
import { GivingComponent } from './components/giving/giving.component';

const CHURCH = "The Potter's House Melville Church";

const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent, title: `${CHURCH} — Auckland Park, Johannesburg` },
  { path: 'events', component: EventsComponent, title: `Upcoming events — ${CHURCH}` },
  { path: 'contact', component: ContactComponent, title: `Contact us — ${CHURCH}` },
  { path: 'services', component: ServicesComponent, title: `Our services — ${CHURCH}` },
  { path: 'giving', component: GivingComponent, title: `Giving — ${CHURCH}` },
  { path: '**', redirectTo: '/home' }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, {
      // Land at the top of each page rather than keeping the previous scroll offset.
      scrollPositionRestoration: 'top',
      anchorScrolling: 'enabled'
    })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
