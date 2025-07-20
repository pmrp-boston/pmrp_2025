---
layout: page
title: Past Shows
---
This section lists our past performances. See our upcoming events page for events to look forward to!

{% comment %}
Sort the seasons in reverse ID order.
{% endcomment %}
{% assign sorted_seasons = site.seasons | sort: "season_id" | reverse %}

{% for season in sorted_seasons %}
{% unless season.current %}
{% assign season_file_path = season.path %}
## [{{ season.title }}]({{ season.url | relative_url }})
{{ season.content }}
{% endunless %}
{% endfor %}