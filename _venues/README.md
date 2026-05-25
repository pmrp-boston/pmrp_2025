*Don't add front matter to this page. If you do, Jekyll will generate a website page for it, and we don't want that.*

# Venues

Venues are locations where PMRP hosts events. These pages should provide useful information to anyone going to a public PMRP event.

Each venue has its own page on the site. This is configured in _config.yml.

```
# Jekyll should output a page for each venue
collections:
  venues:
    output: true

# Jekyll should use the "page" layout for items in the "venues" collection
defaults:
...
  - scope:
      path: ""
      type: "venues"
    values:
      layout: "page"
```

On the site, venues are linked to from:
- **Event pages**
- **Auditions page**
- **Tickets page**
- **Current & Upcoming page**

## Venue folders and files

Each venue only needs one file. Its name should usually match the venue_id.

## Front matter

All venue front matter fields are optional.

| Field | Type | Description |
| ----- | ---- | ----------- |
| title | Text | Venue page title. Used as the title at the top of the page and in the browser tab label e.g. "The church at 204 Elm St. (formerly Boston Brunch Church and Guild Church)"  |
| short_name | Text | Short name for venue. Used for the name of the venue on the tickets page and in lists of performances e.g. "204 Elm St., Davis Square" |
| venue_id | Text | Unique ID for the venue. Usually matches the venue's file name. |
| banner_img | Path | URL path to banner image from site root. See root README.md. |
| banner_alt | Text | Alt text for banner image. See root README.md. |
