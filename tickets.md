---
layout: page
title: Tickets
---

{% assign has_upcoming_events = false %}

{% for event in site.events %}
{% assign event_has_tickets = false %}
{% if site.time < event.closed_datetime %}
{% assign has_upcoming_events = true %}

## [{{ event.title }}]({{ event.url | relative_url }})

### Performances
{% include performances_list.html performances=event.performances %}

{% for ticket_details in include.tickets %}
{% if site.time < ticket_details.closed_datetime and ticket_details.vendor_url %}
{% assign event_has_tickets = true %}

### {{ ticket_details.weekend_title }}

You can buy tickets for **{{ ticket_details.weekend }}** in **{{
    ticket_details.location }}** online through [{{ ticket_details.vendor_name }}]({{ ticket_details.vendor_url | relative_url }}).

{% if ticket_details.vendor_img == "bpt" %}
<a href="{{ ticket_details.vendor_url }}">
    <img src="{{ 'assets/img/BPT_buy_tickets_large.png' | relative_url }}" alt="Tickets available now from Brown Paper Tickets" />
</a>
{% endif %}

{% if ticket_details.vendor_img == "mca" %}
<p>
<a href="{{ ticket_details.vendor_url }}">
    <img src="{{ 'assets/img/mosesian-center-for-the-arts-buy-tickets.png' | relative_url }}"
        alt="Tickets available now from the Dorothy and Charles Mosesian Center for the Arts" />
</a>
</p>
{% endif %}

{% if ticket_details.info %}
{{ ticket_details.info | markdownify }}
{% endif %}

{% endif %}
{% endfor %}

{% if event_has_tickets == false %}
**There are no tickets currently available for this event.**
{% endif %}

{% endif %}
{% endfor %}

{% if has_upcoming_events == false %}
We don't have any upcoming ticketed events right now. Check back later!
{% endif %}
