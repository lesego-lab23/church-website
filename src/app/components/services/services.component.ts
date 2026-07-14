import { Component } from '@angular/core';

interface ServiceItem {
  title: string;
  badge: string;
  description: string;
  day: string;
  time: string;
  location: string;
}

@Component({
  selector: 'app-services',
  templateUrl: './services.component.html',
  styleUrls: ['./services.component.css']
})
export class ServicesComponent {
  readonly services: ServiceItem[] = [
    {
      title: 'Sunday Worship Service',
      badge: 'Weekly Service',
      description: 'Join us for our main worship service with live praise and worship, prayer, and biblical teaching.',
      day: 'Every Sunday',
      time: '10:30a.m. & 5:00p.m.',
      location: 'Main Sanctuary'
    },
    {
      title: 'Wednesday Evening Service',
      badge: 'Midweek Service',
      description: 'Join us for a midweek service to refresh your spirit with worship, prayer, and teaching.',
      day: 'Every Wednesday',
      time: '7:00p.m.',
      location: 'Main Sanctuary'
    },
    {
      title: 'Youth Service',
      badge: 'Youth Service',
      description: 'Join us for a fun and engaging service designed for our youth with fellowship, games, and relevant teaching.',
      day: 'Every Friday',
      time: '6:00p.m.',
      location: 'Cafe 180 Hall'
    },
    {
      title: 'ONE80 Concerts',
      badge: 'Youth Concert',
      description: 'Join us for a night of music, poetry, and drama hosted by our youth.',
      day: 'Every Saturday',
      time: '7:00p.m.',
      location: 'Cafe 180 Hall'
    }
  ];
}
