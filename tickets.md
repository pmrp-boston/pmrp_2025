---
layout: page
title: Tickets
---

{% assign current_events = site.events | where: "current", true %}
{% for event in current_events %}

## [{{ event.title }}]({{ event.url | relative_url }})

### Performance Schedule
{% include performances_list.html performances=event.performances %}

{% for ticket_details in event.tickets %}
### {{ ticket_details.weekend_title }}
{% include buy_tickets.html ticket_details=ticket_details%}
{% endfor %}

{% endfor %}
