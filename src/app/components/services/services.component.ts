import { Component } from '@angular/core';
import { formatTime, Gathering, GATHERINGS, nextGathering, WEEKDAY_NAMES } from '../../data/gatherings';

interface ScheduledDay {
  weekday: number;
  name: string;
  gatherings: Gathering[];
}

@Component({
  selector: 'app-services',
  templateUrl: './services.component.html',
  styleUrls: ['./services.component.css']
})
export class ServicesComponent {
  readonly days: ScheduledDay[];
  readonly next: Gathering;
  readonly nextLabel: string;

  readonly formatTime = formatTime;

  constructor() {
    this.next = nextGathering().gathering;
    this.nextLabel =
      `${WEEKDAY_NAMES[this.next.weekday]} at ${formatTime(this.next)} — ${this.next.name}`;

    this.days = WEEKDAY_NAMES
      .map((name, weekday) => ({
        weekday,
        name,
        gatherings: GATHERINGS.filter((gathering) => gathering.weekday === weekday)
      }))
      .filter((day) => day.gatherings.length > 0);
  }

  isNext(gathering: Gathering): boolean {
    return gathering === this.next;
  }
}
