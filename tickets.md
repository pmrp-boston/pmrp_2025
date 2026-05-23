---
layout: page
title: Tickets
---

{% assign has_upcoming_events = false %}
{% for event in site.events %}
{% if site.time < event.closed_datetime %}
{% assign has_upcoming_events = true %}
{% endif %}
{% endfor %}

{% if has_upcoming_events %}

{% assign sorted_events = site.events | sort: "closed_datetime" %}
{% for event in sorted_events %}
{% if site.time < event.closed_datetime %}

{% capture event_has_tickets %}{% include fn/event_has_tickets.html event=event %}{% endcapture %}

## [{{ event.title }}]({{ event.url | relative_url }})

{{ event.tickets.info }}

### Performances
{% include performances_list.html performances=event.performances %}

{% if event_has_tickets.size > 0 %}
{% for box_office in event.tickets.box_offices %}

{% assign vendor = site.data.box_office_vendors | where: "vendor_id", box_office.vendor_id | first %}
{% assign venue = site.venues | where: "venue_id", box_office.venue_id | first %}

### {{ box_office.title }}

- Dates: {{ box_office.date_info }}
- Location: [{{ venue.short_name }}]({{ venue.url | relative_url }})
{% if box_office.vendor_url %}
- [Buy Tickets]({{ box_office.vendor_url }})
{% endif %}
{% if box_office.reservation_form_url %}
- [Reserve Seats]({{ box_office.reservation_form_url }}) and pay at the door
{% endif %}

{{ box_office.info }}

{% if vendor.img_src %}
<p>
<a href="{{ box_office.vendor_url }}">
    <img src="{{ vendor.img_src | relative_url }}"
        alt="{{ vendor.img_alt }}" />
</a>
</p>
{% endif %}

{% if box_office.vendor_embed %}
{% include {{ box_office.vendor_embed }} %}
{% endif %}

{% if box_office.reservation_form_url %}
You may also reserve seats for these performances through [this reservation form]({{ box_office.reservation_form_url }}) and pay for tickets at the door:

<big><a href="{{ box_office.reservation_form_url }}">Reserve Seats</a></big>

{% endif %}

{% if box_office.reservation_form_embed %}
{% capture reservation_form_embed %}
{% include {{ box_office.reservation_form_embed }} %}
{% endcapture %}
{% include responsive_xscroll.html content=reservation_form_embed %}
{% endif %}

{% endfor %}

{% else %}
**There are no tickets currently available for this event.**
{% endif %}

{% endif %}
{% endfor %}

{% else %}
We don't have any upcoming ticketed events right now. Check back later!
{% endif %}
