---
# Feel free to add content and custom Front Matter to this file.
# To modify the layout, see https://jekyllrb.com/docs/themes/#overriding-theme-defaults

layout: home
title: Welcome to PMRP!
---

{% assign current_season = site.seasons | sort: "season_id" | reverse | first %}
{% if current_season %}
## Now Playing: [{{ current_season.title }}]({{ current_season.url | relative_url }})
Check out our [past shows]({{ "past" | relative_url }}) as well!
{% else %}
We're not running any seasons right now. Check out our [past shows]({{ "past" | relative_url }})!
{% endif %}

