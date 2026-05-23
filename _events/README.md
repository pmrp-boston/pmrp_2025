*Don't add front matter to this page. If you do, Jekyll will generate a website page for it, and we don't want that.*

# Events

Events are live events that PMRP has put on. For example, these include:

- Mainstage performances (Spring, Summer, and Halloween shows)
- Convention performances (Arisia, Boskone, Watch City, etc.)
- Public events like Foley 101
- Off-main performances (Gender-Swapped Star Trek reprises, etc.)
- Any other live performances

Each event has its own page on the site. This is configured in _config.yml.
```
# Jekyll should output a page for each event
collections:
  events:
    output: true

# Jekyll should use the "event" layout for items in the "events" collection
defaults:
...
  - scope:
      path: ""
      type: "events"
    values:
      layout: "event"
```

On the site, lists of events appear in these places:

- **Season pages**
- **Past Shows page**
- **Current & Upcoming page** if they are upcoming
- **Current & Upcoming menu** if they are upcoming
- **Tickets page** if they are upcoming and have available tickets
- **Auditions page** if they are upcoming and have available auditions

## Event folders & files

An event folder should look something like this:

```
event_folder/
└── index.md
```

The folder name determines the event's URL. pmrp.org/events/event_folder (and event_folder/index, and event_folder/index.html) will open the index.md page.

If there are other files in an event folder, they will be sub-pages under the event. For example, with this folder structure:

```
event_folder/
├── Program.pdf
├── auditions.md
└── index.md
```

We will have these pages:

- pmrp.org/events/event_folder
- pmrp.org/events/event_folder/index
- pmrp.org/events/event_folder/index.html
- pmrp.org/events/event_folder/Program.pdf
- pmrp.org/events/event_folder/auditions
- pmrp.org/events/event_folder/auditions.html

## Front matter

Below, "now" refers to the time the site was regenerated.

**For old event migrations:** To appear in the right places on the site, every event MUST have a correct:

- `title`
- `event_id`
- `season_id`
- `closed_datetime`

Other front matter fields are optional.

| Field | Type | Description |
| ----- | ---- | ----------- |
| title | Text | Event title. Used as the title at the top of the event's page, in the browser tab label, as the page's name in event lists, and on the auditions and tickets pages. |
| event_id | Text | Unique ID for the event. Usually matches the event folder name. |
| season_id | Text | Season the event is part of. Should match a season_id from the seasons collection. Makes the event show up in lists of events for a season. |
| closed_datetime | Datetime | Date and time the event closes. If before "now", the event will be in lists of Past events. If after "now", the event will be in lists of Upcoming events on season pages, on the Current & Upcoming page, and in the Current & Upcoming main menu. |
| auditions | Object | See [Auditions front matter](#auditions-front-matter). |
| performances | Object | If present, performances for the event will appear on these pages: the event, Current & Upcoming, auditions, and tickets. See [Performances front matter](#performances-front-matter). |
| locations | List of objects | If present, locations for the event will appear on the event page. See [Locations front matter](#locations-front-matter). |
| tickets | List of objects | See [Tickets front matter](#tickets-front-matter). |

### Auditions front matter

| Field | Type | Description |
| ----- | ---- | ----------- |
| auditions.closed_datetime | Datetime | Date and time auditions close. If this is before "now", audition information will be listed on the event's page, the auditions page, the homepage, and the Current & Upcoming page. If any event has open auditions, an "Audition Now" link will also appear in the site banner. |
| auditions.dates | List of dates | Dates auditions are happening. |
| auditions.info | Markdown | Additional information about auditions. Appears on event page and auditions page. Usually "Callbacks, if needed, will be individually scheduled over Zoom." |
| auditions.venue_id | Text | Venue where auditions will take place. Should match a venue_id from the venues collection. If present, the Location section will appear on the auditions page. |
| auditions.docs_link | URL | URL to where auditionees can view audition documents (sides, character descriptions, etc.). If present, the Audition Materials link will appear on the auditions page. |
| auditions.signup_form_link | URL | URL to where auditionees can sign up for auditions. If present, the Audition Sign Up Form link will appear on the auditions page. |
| auditions.special_instructions | Markdown | Notes about auditions **specific to this event**. Highlight anything that makes this event's casting different from other events', e.g. gender swaps, extra-large-commitment roles, specific character genders, races, or other qualities. If present, a special "About {title of event} Auditions" section will appear. |

### Performances front matter

| Field | Type | Description |
| ----- | ---- | ----------- |
| performances.dates | List of objects | Dates performances are happening. |
| performances.dates[].date_info | Text | Text description of the performance date. Use when approximate performance dates are known, but not specific datetimes. Ignored if datetime is present. |
| performances.dates[].datetime | Datetime | Date and time of performance. |
| performances.dates[].venue_id | Text | Venue where performance is happening. Should match a venue_id from the venues collection. |
| performances.info | Markdown | Additional information about performances. Appears on event page and tickets page. |

### Locations front matter

| Field | Type | Description |
| ----- | ---- | ----------- |
| locations[].venue_id | Text | Venue. Should match a venue_id from the venues collection. |
| locations[].info | Markdown | Additional information about a location specific to this event, e.g. "Auditions and first weekend of shows." |

### Tickets front matter

For a box office to be listed on the tickets page, it MUST have:
- `closed_datetime`
- `vendor_url` or `reservation_form_url`
- `date_info`
- `venue_id`

| Field | Type | Description |
| ----- | ---- | ----------- |
| tickets.info | Markdown | Additional information about tickets. |
| tickets.box_offices | List of objects | The box offices through which we're selling tickets for this show. |
| tickets.box_office[].closed_datetime | Datetime | Date and time this box office's ticket sales close. If this is before "now" and there is a `vendor_url`, ticket information will be listed on the event's page, the tickets page, the homepage, and the Current & Upcoming page. If any event has an open box office, a "Get Tickets" link will also appear in the site banner. |
| tickets.box_office[].vendor_url | URL | URL for box office ticket purchases. |
| tickets.box_office[].reservation_form_url | URL | URL for ticket reservation form. |
| tickets.box_office[].date_info | Markdown | Short description of the dates this box office is selling tickets for, e.g. "the first weekend" or "April 16-18". |
| tickets.box_office[].venue_id | Text | Venue this box office is selling tickets for. Should match a venue_id from the venues collection. |
| tickets.box_office[].title | Markdown | Title for this box office's section |
| tickets.box_office[].info | Markdown | Additional info about tickets from this box office |
| tickets.box_office[].vendor_id | Text | ID of box office vendor. Must match a vendor_id from `_data/box_office_vendors.yml`. |
| tickets.box_office[].vendor_embed | Includes | Path to a file in the "includes" folder. Appears after the Buy Tickets link. |
| tickets.box_office[].reservation_form_embed | Includes | Path to a file in the "includes" folder. Appears after Ticket Reservations link. |
