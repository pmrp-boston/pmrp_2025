---
layout: page
title: Current & Upcoming
---
This page list our upcoming events. You may also want to check out our [past events]({{ "past" | relative_url }}), some of which have audio, video, or CDs available.

{% assign current_season = site.seasons | sort: "season_id" | reverse | first %}
Current season: [{{ current_season.title }}]({{ current_season.url | relative_url }})

{% for event in site.events %}
{% if site.time < event.closed_datetime %}

## [{{ event.title }}]({{ event.url | relative_url }})

{{ event.excerpt }}

{% if site.time < event.auditions.closed_datetime %}
[Auditions]({{ 'auditions' | relative_url }}) are open! Sign up today.
{% endif %}

{% assign has_tickets = false %}
{% for ticket_details in event.tickets %}
{% if site.time < ticket_details.closed_datetime %}
{% assign has_tickets = true %}
{% endif %}
{% endfor %}

{% if has_tickets %}
[Tickets]({{ 'tickets' | relative_url }}) are available! Get yours today.
{% endif %}

### Performances
{% include performances_list.html performances=event.performances %}

{% endif %}
{% endfor %}
