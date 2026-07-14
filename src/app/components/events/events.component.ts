import { Component } from '@angular/core';

interface EventItem {
  month: string;
  monthShort: string;
  day: string;
  title: string;
  schedule: string[];
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
      description: 'Fellowship with the church family as people share their gifts and creativity.'
    },
    {
      month: 'August',
      monthShort: 'AUG',
      day: '1',
      title: 'Parenting Masterclass',
      schedule: ['August 1'],
      description: "Invest into your children's future."
    },
    {
      month: 'August',
      monthShort: 'AUG',
      day: '24-28',
      title: 'South African Bible Conference',
      schedule: ['August 24-28'],
      description: "Join us for a powerful time of worship, prayer and teaching as we seek God's revival together."
    },
    {
      month: 'September',
      monthShort: 'SEP',
      day: '12',
      title: 'Marriage Class',
      schedule: ['September 12'],
      description: 'Strengthen your marriage with practical teaching and encouragement.'
    },
    {
      month: 'September',
      monthShort: 'SEP',
      day: '19',
      title: 'Fashion Show',
      schedule: ['September 19'],
      description: 'Fellowship with the youth as they bring their creativity and talent to the stage.'
    },
    {
      month: 'September',
      monthShort: 'SEP',
      day: '26',
      title: 'Parenting Masterclass #2',
      schedule: ['September 26'],
      description: "Invest into your children's future."
    },
    {
      month: 'October',
      monthShort: 'OCT',
      day: '11-14',
      title: 'Revival with Ps Dragici from Romania',
      schedule: ['October 11-14'],
      description: "Join us for a powerful time of worship, prayer and teaching as we seek God's revival together."
    },
    {
      month: 'November',
      monthShort: 'NOV',
      day: '14',
      title: 'Marriage Class',
      schedule: ['November 14'],
      description: 'Strengthen your marriage with practical teaching and encouragement.'
    },
    {
      month: 'November',
      monthShort: 'NOV',
      day: '21',
      title: 'Parenting Masterclass #3',
      schedule: ['November 21'],
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
