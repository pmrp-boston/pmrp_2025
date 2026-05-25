*Don't add front matter to this page. If you do, Jekyll will generate a website page for it, and we don't want that.*

# Seasons

Seasons group live events, historically by year. 

On the site, lists of seasons appear on the past.md page. 

## Seasons files

Each season should have a file named year.md, e.g. 2025.md. 

## Front matter

Below, "now" refers to the time the site was regenerated.

**For old season migrations:** To appear in the right places on the site, every season MUST have a correct:

- `season_id`
- `title`
- `closed_datetime`

| Field | Type | Description |
| ----- | ---- | ----------- |
| title | Text | Season title. Used as the title at the top of the event's page, in the browser tab label, as the page's name in event lists, and on the auditions and tickets pages. |
| season_id | Text | Season the event is part of. Should match a season_id from the seasons collection. Makes the event show up in lists of events for a season. |
| closed_datetime | Datetime | Date and time the event closes. If before "now", the event will be in lists of Past events. If after "now", the event will be in lists of Upcoming events on season pages, on the Current & Upcoming page, and in the Current & Upcoming main menu. |
| banner_img | Path | URL path to banner image from site root. See root README.md. |
| banner_alt | Text | Alt text for banner image. See root README.md. |

