import { Component, ElementRef, HostListener, ViewChild } from '@angular/core';
import { formatTime, GATHERINGS, WEEKDAY_NAMES } from './data/gatherings';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  @ViewChild('pageTop') private pageTop?: ElementRef<HTMLElement>;

  /** Whether the reader has scrolled far enough for a way back to be useful. */
  isPastFold = false;

  readonly year = new Date().getFullYear();

  @HostListener('window:scroll')
  onScroll() {
    this.isPastFold = window.scrollY > 700;
  }

  scrollToTop() {
    const prefersReducedMotion = window.matchMedia?.('(prefers-reduced-motion: reduce)').matches;

    window.scrollTo({ top: 0, behavior: prefersReducedMotion ? 'auto' : 'smooth' });

    // Send the keyboard back to the top of the document too, so tabbing
    // after the jump carries on from the header rather than the footer.
    this.pageTop?.nativeElement.focus({ preventScroll: true });
  }

  /** One line per day, so a day with two services is not listed twice. */
  readonly weeklyRhythm = WEEKDAY_NAMES
    .map((day, weekday) => ({
      day,
      times: GATHERINGS
        .filter((gathering) => gathering.weekday === weekday)
        .map((gathering) => `${formatTime(gathering)} ${gathering.name}`)
        .join(' · ')
    }))
    .filter((entry) => entry.times.length > 0);

  readonly channels = [
    { name: 'WhatsApp', url: 'https://whatsapp.com/channel/0029Vb9vqLuJ3jv0Ayli350o' },
    { name: 'Instagram', url: 'https://www.instagram.com/pottershousemelville?igsh=bmFxdGo5OWloNnlv' },
    { name: 'YouTube', url: 'https://www.youtube.com/@PottersHouseMelville' },
    { name: 'TikTok', url: 'https://www.tiktok.com/@cafe180_unfiltered?_r=1&_t=ZS-95TTqTr8B86' }
  ];
}
