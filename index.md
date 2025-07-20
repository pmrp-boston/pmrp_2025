---
# Feel free to add content and custom Front Matter to this file.
# To modify the layout, see https://jekyllrb.com/docs/themes/#overriding-theme-defaults

layout: home
title: Welcome to PMRP!
---

{% assign current_seasons = site.seasons | where: "current", true %}
## Current {% if current_seasons.size <= 1 %}season{% else %}seasons{% endif %}
{% if current_seasons.size > 0 %}
{% for season in current_seasons %}
- [{{ season.title }}]({{ season.url | relative_url }})
{% endfor %}
Check out our [past shows]({{ "past" | relative_url }}) as well!
{% else %}
We're not running any seasons right now. Check out our [past shows]({{ "past" | relative_url }})!
{% endif %}

