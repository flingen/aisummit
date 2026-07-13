// ---------------------------------------------------------------------------
// SINGLE SOURCE OF TRUTH for event details.
// Change the date, venue or registration link HERE and it updates everywhere:
// Hero, Header, Countdown, FAQ, Footer, CTA, Agenda page, Speakers page, meta.
// ---------------------------------------------------------------------------

// --- Registration (Luma) ---
export const LUMA_EVENT_ID = 'evt-NIQGlH3URz8hCV6';
export const LUMA_EVENT_URL = `https://luma.com/event/${LUMA_EVENT_ID}`;
export const LUMA_CHECKOUT_SCRIPT_ID = 'luma-checkout';
export const LUMA_CHECKOUT_SCRIPT_SRC = 'https://embed.lu.ma/checkout-button.js';

// --- Date & time ---
// Thursday, 30th July 2026, 8:00 AM WAT (UTC+1)
export const EVENT_DATE_ISO = '2026-07-30T08:00:00+01:00';
export const EVENT_DAY_LABEL = 'Thursday, 30th July';
export const EVENT_YEAR_LABEL = '2026';
export const EVENT_TIME_LABEL = '8:00 AM';
export const EVENT_TZ_LABEL = 'WAT';
export const EVENT_DATE_SHORT = 'July 30'; // used in prose
export const EVENT_DATE_MONO = 'thursday, 30th july 2026 · 8:00 am wat'; // mono-label strips

// --- Venue ---
export const VENUE_NAME = 'Oriental Hotel';
export const VENUE_AREA = 'Victoria Island';
export const VENUE_CITY = 'Lagos';
export const VENUE_FULL = `${VENUE_NAME}, ${VENUE_AREA}, ${VENUE_CITY}`;
export const VENUE_MONO = 'oriental hotel, victoria island, lagos';
export const VENUE_MAPS_URL =
  'https://www.google.com/maps/search/?api=1&query=Oriental+Hotel+Victoria+Island+Lagos';

// --- Other links ---
export const SPONSORSHIP_DECK_URL =
  'https://drive.google.com/drive/folders/1piAb3McIIhbNl3cmNMs-CDDWDxQ4lDAy?usp=sharing';
export const BOOK_A_CALL_URL = 'https://calendly.com/nigeriastablecoinsummit/nss';
export const APPLY_TO_SPEAK_URL = 'https://forms.gle/ANkQJexAc7Bx3wWB7';
