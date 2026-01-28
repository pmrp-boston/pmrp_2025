---
layout: home
---

{% assign num_upcoming_events = 0 %}
{% for event in site.events %}
{% if site.time < event.closed_datetime %}
{% assign num_upcoming_events = num_upcomin_events | plus: 1 %}
{% endif %}
{% endfor %}

{% if num_upcoming_events >= 2 %}

# Now Playing: 

{% for event in site.events %}
{% if site.time < event.closed_datetime %}

## [{{ event.title }}]({{ event.url | relative_url }})

{{ event.excerpt }}

{% if event.auditions.closed_datetime %}
[Auditions are now open!]({{ 'auditions' | relative_url }})
{% endif %}

{% assign has_tickets = false %}
{% for ticket_details in event.tickets %}
{% if site.time < ticket_details.closed_datetime %}
{% assign has_tickets = true %}
{% endif %}
{% endfor %}

{% if has_tickets %}
[Tickets are available now!]({{ 'tickets' | relative_url }})
{% endif %}

{% endif %}
{% endfor %}

{% elsif num_upcoming_events == 1 %}

{% for event in site.events %}
{% if site.time < event.closed_datetime %}
{% assign current_event = event %}
{% endif %}
{% endfor %}

# Now Playing: [{{ current_event.title }}]({{ current_event.url | relative_url }})

{{ current_event.excerpt }}

{% if current_event.auditions.closed_datetime %}
[Auditions are now open!]({{ 'auditions' | relative_url }})
{% endif %}

{% assign has_tickets = false %}
{% for ticket_details in current_event.tickets %}
{% if site.time < ticket_details.closed_datetime %}
{% assign has_tickets = true %}
{% endif %}
{% endfor %}

{% if has_tickets %}
[Tickets are available now!]({{ 'tickets' | relative_url }})
{% endif %}

{% else %}
We're not running any seasons right now. Check out our [past shows]({{ "past" | relative_url }})!
{% endif %}

## Boston's Premier Radio Drama Troupe

The **Post-Meridian Radio Players** (PMRP) are a group of actors, writers, Foley/SFX artists, composers, sound designers and other interested people dedicated to the preservation of radio drama, and the development of audio theater, as unique art forms. We offer live performances and studio productions of both classic tales from the Golden Age of Radio and original works by new and experienced writers, with a special emphasis on science-fiction, fantasy, and horror.

