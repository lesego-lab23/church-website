import { Component } from '@angular/core';

interface EventItem {
  month: string;
  monthShort: string;
  day: string;
  title: string;
  schedule: string[];
  time: string;
  location: string;
  description: string;
}

interface EventMonthGroup {
  month: string;
  events: EventItem[];
}

@Component({
  selector: 'app-events',
  templateUrl: './events.component.html',
  styleUrls: ['./events.component.css']
})
export class EventsComponent {
  readonly eventGroups: EventMonthGroup[] = this.groupEventsByMonth([
    {
      month: 'July',
      monthShort: 'JUL',
      day: '25',
      title: 'Talent Show',
      schedule: ['July 25'],
      time: '7:00 PM',
      location: 'Fellowship Hall',
      description: 'Fellowship with the church family as people share their gifts and creativity.'
    },
    {
      month: 'August',
      monthShort: 'AUG',
      day: '1',
      title: 'Parenting Masterclass',
      schedule: ['August 1'],
      time: '2:00 PM',
      location: 'Fellowship Hall',
      description: "Invest into your children's future."
    },
    {
      month: 'August',
      monthShort: 'AUG',
      day: '24-28',
      title: 'South African Bible Conference',
      schedule: ['August 24-28'],
      time: '6:00 PM',
      location: '23 Summit Dr, Rispark, Johannesburg',
      description: "Join us for the South African Bible Conference.Please note there will be morning seminars from 25-28 August at 09:00 AM."
    },
    {
      month: 'September',
      monthShort: 'SEP',
      day: '12',
      title: 'Marriage Class',
      schedule: ['September 12'],
      time: '2:00 PM',
      location: 'Fellowship Hall',
      description: 'Strengthen your marriage with practical teaching and encouragement.'
    },
    {
      month: 'September',
      monthShort: 'SEP',
      day: '19',
      title: 'Fashion Show',
      schedule: ['September 19'],
      time: 'To be confirmed',
      location: 'Fellowship Hall',
      description: 'Fellowship with the youth as they bring their creativity and talent to the stage.'
    },

    {
      month: 'October',
      monthShort: 'OCT',
      day: '11-14',
      title: 'Revival with Ps Dragici from Romania',
      schedule: ['October 11-14'],
      time: '10;30 AM & 5:00 PM',
      location: 'Main Sanctuary',
      description: "Please note from the 12th-14th services will only be at 7:00pm."
    },
    {
      month: 'November',
      monthShort: 'NOV',
      day: '14',
      title: 'Marriage Class',
      schedule: ['November 14'],
      time: '2:00 PM',
      location: 'Main Sanctuary',
      description: 'Strengthen your marriage with practical teaching and encouragement.'
    },
    {
      month: 'November',
      monthShort: 'NOV',
      day: '21',
      title: 'Parenting Masterclass #3',
      schedule: ['November 21'],
      time: '2:00',
      location: 'Main Sanctuary',
      description: "Invest into your children's future."
    }
  ]);

  private groupEventsByMonth(events: EventItem[]): EventMonthGroup[] {
    return events.reduce<EventMonthGroup[]>((groups, event) => {
      const group = groups.find((currentGroup) => currentGroup.month === event.month);

      if (group) {
        group.events.push(event);
      } else {
        groups.push({
          month: event.month,
          events: [event]
        });
      }

      return groups;
    }, []);
  }
}
