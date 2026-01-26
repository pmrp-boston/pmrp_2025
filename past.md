---
layout: page
title: Past Shows
---

This section lists our past performances. See our upcoming events page for events to look forward to!

{% assign sorted_seasons = site.seasons | sort: "season_id" | reverse %}

{% for season in sorted_seasons %}
## [{{ season.title }}]({{ season.url | relative_url }})

{{ season.content }}

{% if season.season_id %}
{% assign season_events = site.events | where: "season_id", season.season_id %}

{% assign has_past_event = false %}
{% for event in season_events %}
{% if site.time > event.closed_datetime or event.closed_datetime == nil %}
{% assign has_past_event = true %}
{% endif %}
{% endfor %}

{% if has_past_event %}

### Events

{% for event in season_events %}
{% if site.time > event.closed_datetime or event.closed_datetime == nil %}

* [{{ event.title }}]({{ event.url | relative_url }})

{% endif %}
{% endfor %}

{% endif %}
{% endif %}


{% endfor %}