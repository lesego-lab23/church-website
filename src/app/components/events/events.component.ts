import { Component } from '@angular/core';

interface EventItem {
  month: string;
  monthShort: string;
  /** Day or day range within the month, e.g. "25" or "24-28". */
  day: string;
  title: string;
  time: string;
  location: string;
  description: string;
  /** Shown only where the usual pattern changes for that event. */
  note?: string;
}

interface EventMonthGroup {
  month: string;
  monthShort: string;
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
      monthShort: 'Jul',
      day: '25',
      title: 'Talent Show',
      time: '19:00',
      location: 'Fellowship Hall',
      description: 'Fellowship with the church family as people share their gifts and creativity.'
    },
    {
      month: 'August',
      monthShort: 'Aug',
      day: '1',
      title: 'Parenting Masterclass',
      time: '14:00',
      location: 'Fellowship Hall',
      description: "Practical teaching on raising children, and time to ask the questions you actually have."
    },
    {
      month: 'August',
      monthShort: 'Aug',
      day: '24–28',
      title: 'South African Bible Conference',
      time: '18:00',
      location: '23 Summit Drive, Rispark, Johannesburg',
      description: 'Five evenings of teaching with churches from across the country.',
      note: 'Morning seminars run 25–28 August at 09:00.'
    },
    {
      month: 'September',
      monthShort: 'Sep',
      day: '12',
      title: 'Marriage Class',
      time: '14:00',
      location: 'Fellowship Hall',
      description: 'Strengthen your marriage with practical teaching and encouragement.'
    },
    {
      month: 'September',
      monthShort: 'Sep',
      day: '19',
      title: 'Fashion Show',
      time: 'Time to be confirmed',
      location: 'Fellowship Hall',
      description: 'Fellowship with the youth as they bring their creativity and talent to the stage.'
    },
    {
      month: 'October',
      monthShort: 'Oct',
      day: '11–14',
      title: 'Revival with Ps Dragici from Romania',
      time: '10:30 & 17:00',
      location: 'Main Sanctuary',
      description: 'Four days of revival meetings with a visiting pastor from Romania.',
      note: 'From 12–14 October there is one service only, at 19:00.'
    },
    {
      month: 'November',
      monthShort: 'Nov',
      day: '14',
      title: 'Marriage Class',
      time: '14:00',
      location: 'Main Sanctuary',
      description: 'Strengthen your marriage with practical teaching and encouragement.'
    },
    {
      month: 'November',
      monthShort: 'Nov',
      day: '21',
      title: 'Parenting Masterclass',
      time: '14:00',
      location: 'Main Sanctuary',
      description: 'The third session in the parenting series. Come even if you missed the first two.'
    }
  ]);

  /** "8 events, July through November" — the shape of the diary at a glance. */
  get diarySummary(): string {
    const total = this.eventGroups.reduce((count, group) => count + group.events.length, 0);
    const first = this.eventGroups[0]?.month;
    const last = this.eventGroups[this.eventGroups.length - 1]?.month;

    return `${total} events, ${first} through ${last}`;
  }

  private groupEventsByMonth(events: EventItem[]): EventMonthGroup[] {
    return events.reduce<EventMonthGroup[]>((groups, event) => {
      const group = groups.find((currentGroup) => currentGroup.month === event.month);

      if (group) {
        group.events.push(event);
      } else {
        groups.push({
          month: event.month,
          monthShort: event.monthShort,
          events: [event]
        });
      }

      return groups;
    }, []);
  }
}
