---
layout: page
title: Current & Upcoming
---
This page list our upcoming events. You may also want to check out our [past events]({{ "past" | relative_url }}), some of which have audio, video, or CDs available.

{% assign current_events = site.events | where: "current", true %}
{% for event in current_events %}
- [{{ event.title }}]({{ event.url | relative_url }})
{% endfor %}