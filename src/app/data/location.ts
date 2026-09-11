/**
 * The sanctuary. Single source for the printed address, the embedded map
 * and the directions link, so they can never disagree with each other.
 */
export const CHURCH_LOCATION = {
  address: '5 Sunbury Avenue, Auckland Park, Johannesburg, 2092',
  latitude: -26.1795992,
  longitude: 28.0080217
};

/** Google's documented directions URL — deep-links into the Maps app on a phone. */
export const DIRECTIONS_URL =
  `https://www.google.com/maps/dir/?api=1&destination=${encodeURIComponent(CHURCH_LOCATION.address)}`;

/**
 * Keyless Google Maps embed; Google resolves it to the official /maps/embed
 * endpoint. Coordinates rather than the address so the view is centred on the
 * building itself rather than on whatever the geocoder matches.
 */
export const MAP_EMBED_URL =
  `https://maps.google.com/maps?q=${CHURCH_LOCATION.latitude},${CHURCH_LOCATION.longitude}` +
  '&z=16&hl=en&output=embed';
