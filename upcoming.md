---
layout: page
title: Current & Upcoming
permalink: /events/upcoming
---
This page list our upcoming events. You may also want to check out our past events, some of which have audio, video, or CDs available.

{% for event in site.events %}
{% if event.year >= 2025 %}
- {{ event.title }} ({{ event.year }})
{% endif %}
{% endfor %}