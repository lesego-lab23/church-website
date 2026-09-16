/**
 * The weekly rhythm of the church. This is the single source of truth for
 * every place service times appear — the home page week strip, the services
 * page and the footer — so the times can never drift apart between pages.
 */
export interface Gathering {
  /** 0 = Sunday, matching Date.prototype.getDay(). */
  weekday: number;
  /** 24-hour local start time. */
  hour: number;
  minute: number;
  name: string;
  location: string;
  description: string;
  /** Who the gathering is shaped for — shown as the card's category. */
  kind: 'Worship' | 'Midweek' | 'Youth';
}

export const WEEKDAY_NAMES = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
export const WEEKDAY_INITIALS = ['Su', 'Mo', 'Tu', 'We', 'Th', 'Fr', 'Sa'];

export const GATHERINGS: Gathering[] = [
  {
    weekday: 0,
    hour: 10,
    minute: 30,
    name: 'Morning Worship',
    location: 'Main Sanctuary',
    description: 'Live praise and worship, prayer, and biblical teaching. Come as you are.',
    kind: 'Worship'
  },
  {
    weekday: 0,
    hour: 17,
    minute: 0,
    name: 'Evening Worship',
    location: 'Main Sanctuary',
    description: 'A second chance to gather on Sunday, with the same welcome.',
    kind: 'Worship'
  },
  {
    weekday: 3,
    hour: 19,
    minute: 0,
    name: 'Midweek Service',
    location: 'Main Sanctuary',
    description: 'Worship, prayer and teaching to carry you through the rest of the week.',
    kind: 'Midweek'
  },
  {
    weekday: 5,
    hour: 18,
    minute: 0,
    name: 'Youth Service',
    location: 'Cafe 180 Hall',
    description: 'Fellowship, games and teaching for our young people.',
    kind: 'Youth'
  },
  {
    weekday: 6,
    hour: 19,
    minute: 0,
    name: 'ONE80 Concert',
    location: 'Cafe 180 Hall',
    description: 'A night of music, poetry and drama hosted by the youth.',
    kind: 'Youth'
  }
];

/** "10:30" / "19:00" — 24-hour, the way service times are read out here. */
export function formatTime(gathering: Gathering): string {
  return `${gathering.hour}:${String(gathering.minute).padStart(2, '0')}`;
}

/**
 * The next gathering from `now`, searching forward through the week and
 * wrapping into the next one. Always returns something — the rhythm repeats.
 */
export function nextGathering(now: Date = new Date()): { gathering: Gathering; startsAt: Date } {
  const candidates = GATHERINGS.map((gathering) => {
    const startsAt = new Date(now);
    const daysAhead = (gathering.weekday - now.getDay() + 7) % 7;

    startsAt.setDate(now.getDate() + daysAhead);
    startsAt.setHours(gathering.hour, gathering.minute, 0, 0);

    // Already started today — it comes round again next week.
    if (startsAt.getTime() <= now.getTime()) {
      startsAt.setDate(startsAt.getDate() + 7);
    }

    return { gathering, startsAt };
  });

  return candidates.reduce((soonest, candidate) =>
    candidate.startsAt < soonest.startsAt ? candidate : soonest
  );
}
