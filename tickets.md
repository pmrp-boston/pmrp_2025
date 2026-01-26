---
layout: page
title: Tickets
---

{% assign current_events = site.events | where: "current", true %}

{% if current_events.size == 0 %}
We don't have any tickets available right now. In the meantime, check out our [upcoming events]({{ 'upcoming' | relative_url }})!
{% endif %}

{% for event in current_events %}

## [{{ event.title }}]({{ event.url | relative_url }})

### Performance Schedule
{% include performances_list.html performances=event.performances %}

{% assign found_tickets = false %}

{% for ticket_details in include.tickets %}

{%- if site.time < ticket_details.closed_datetime -%}
{% assign found_tickets = true %}

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

{% if ticket_details.extra_content_id %}
{% for extra_content in site.extra_content %}
{% if extra_content.extra_content_id == ticket_details.extra_content_id %}
{{ extra_content | markdownify }}
{% endif %}
{% endfor %}
{% endif %}

{%- endif -%}

{% endfor %}

{% if found_tickets == false %}
<p>There are no tickets currently available for this event.</p>
{% endif %}

{% endfor %}
