---
layout: page
title: Past Live Events
permalink: /past
---
This section lists our past performances. See our upcoming events page for events to look forward to!

{% for event in site.events %}
{% if event.year < 2025 %}
- {{ event.title }} ({{ event.year }})
{% endif %}
{% endfor %}