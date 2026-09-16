import { Component } from '@angular/core';
import {
  formatTime,
  Gathering,
  GATHERINGS,
  nextGathering,
  WEEKDAY_INITIALS,
  WEEKDAY_NAMES
} from '../../data/gatherings';

interface WeekDay {
  initial: string;
  name: string;
  gatherings: Gathering[];
  isNext: boolean;
  isToday: boolean;
}

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  readonly week: WeekDay[];
  readonly nextLabel: string;
  readonly nextDetail: string;

  constructor() {
    const now = new Date();
    const next = nextGathering(now);

    this.week = WEEKDAY_INITIALS.map((initial, weekday) => ({
      initial,
      name: WEEKDAY_NAMES[weekday],
      gatherings: GATHERINGS.filter((gathering) => gathering.weekday === weekday),
      isNext: next.gathering.weekday === weekday,
      isToday: now.getDay() === weekday
    }));

    this.nextLabel = this.describeWhen(now, next.startsAt);
    this.nextDetail = `${next.gathering.name} · ${formatTime(next.gathering)} · ${next.gathering.location}`;
  }

  readonly leaders = [
    {
      image: 'assets/leader-1.jpeg',
      name: 'Riaan Botha',
      title: 'Senior Pastor'
    }
  ];

  formatTime = formatTime;

  /** "Today", "Tomorrow", or the weekday name — whichever a visitor would say. */
  private describeWhen(now: Date, startsAt: Date): string {
    const startOfToday = new Date(now);
    startOfToday.setHours(0, 0, 0, 0);

    const startOfEvent = new Date(startsAt);
    startOfEvent.setHours(0, 0, 0, 0);

    const daysAway = Math.round((startOfEvent.getTime() - startOfToday.getTime()) / 86400000);

    if (daysAway === 0) {
      return 'Today';
    }

    if (daysAway === 1) {
      return 'Tomorrow';
    }

    return WEEKDAY_NAMES[startsAt.getDay()];
  }
}
