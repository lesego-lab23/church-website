import { Component, Input } from '@angular/core';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';
import { CHURCH_LOCATION, DIRECTIONS_URL, MAP_EMBED_URL } from '../../data/location';

/**
 * The map band, shared by the home and contact pages. Each page gives it its
 * own eyebrow and heading; the address, map and directions link come from one
 * constant so they stay in step.
 */
@Component({
  selector: 'app-location-map',
  templateUrl: './location-map.component.html',
  styleUrls: ['./location-map.component.css']
})
export class LocationMapComponent {
  @Input() eyebrow = 'Find us';
  @Input() heading = 'Where we meet';

  /** Touch screens only: the map ignores drags until the reader taps it. */
  isMapActive = false;

  readonly location = CHURCH_LOCATION;
  readonly directionsUrl = DIRECTIONS_URL;
  readonly mapUrl: SafeResourceUrl;

  constructor(sanitizer: DomSanitizer) {
    // Angular blocks iframe sources by default; this URL is a constant we build, not user input.
    this.mapUrl = sanitizer.bypassSecurityTrustResourceUrl(MAP_EMBED_URL);
  }
}
