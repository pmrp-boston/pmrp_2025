---
layout: page
title: Auditions
---

{% assign has_upcoming_events = false %}
{% for event in site.events %}
{% if site.time < event.closed_datetime %}
{% assign has_upcoming_events = true %}
{% endif %}
{% endfor %}

{% unless has_upcoming_events %}
We aren't running any shows with auditions right now. Check back later!
{% endunless %}

{% for event in site.events %}
{% if site.time < event.closed_datetime %}

## [{{ event.title }}]({{ event.url | relative_url }})

{% if site.time < event.auditions.closed_datetime %}
{% if event.auditions.dates %}

### Dates

Auditions for **{{ event.title }}** will be held on:

{% for audition_date in event.auditions.dates %}
- {{ audition_date | date: "%A %B %e, %Y" }}
{% endfor %}
{% endif %}

{% if event.auditions.venue_id %}

### Location

{% assign venue = site.venues | where: "venue_id", event.auditions.venue_id | first %}
Auditions will be held at [{{ venue.title }}]({{ venue.url | relative_url }})
{% endif %}

{{ event.auditions.info }}

{% if event.auditions.signup_form_link and event.auditions.docs_link %}
### Resources

- [Audition Sign Up Form]({{ event.auditions.signup_form_link }})
- [Audition Materials]({{ event.auditions.docs_link }})
{% endif %}

{% else %}

**There are no auditions currently available for this event.**

{% endif %}

{% if event.performances %}
### Performances
{% include performances_list.html performances=event.performances %}
{% endif %}

<aside class="callout">
    <h3>About PMRP Auditions</h3>
    <p>Parts will be available for both voice and Foley roles.</p>
    <p><strong>IMPORTANT:</strong> Since performers will be in close proximity on stage and at rehearsals, we are requiring performers to be fully vaccinated against COVID-19.</p>
    <p><strong>PLEASE NOTE:</strong> The Post-Meridian Radio Players is a community theater group and is run by volunteers. Our performers are not paid.</p>
</aside>

### About the Show

{{ event.excerpt }}

See [the show's page]({{ event.url | relative_url }}) for more information.

{% if event.auditions.special_instructions %}
<aside class="callout">
<h4>About <strong>{{ event.title }}</strong> Auditions</h4>

{{ event.auditions.special_instructions | markdownify }}

</aside>
{% endif %}

{% if event.auditions.docs_link and event.auditions.signup_form_link %}
### How To Audition

#### Now

1. First, consult the descriptions of the three segments on [the show page]({{ event.url }}), and the audition sides and character descriptions in [our Audition Documents folder on Google Drive]({{ event.auditions.docs_link }}), to get a sense of the plays and an idea of what roles you’re interested in.
2. Then, **[click here to sign up for an audition appointment]({{ event.auditions.signup_form_link }})**, fill out the form, and submit it.
   - In previous auditions, we’ve had a short online form to sign up for an audition slot, and a longer paper form to fill out to tell us about your skills and interests and let us know (for instance) what plays or roles you’re particularly interested in. We’ve finally been dragged kicking and screaming into the 20th Century and combined both of those forms into a single online form. This means that you’ll want to think not just about when you’d like to audition, but also about what specifically you’re interested in auditioning for, before (or while) you fill out the form.
   - Space-permitting, we will still be accommodating walk-ins at audition, and there will be a way for you to fill out the audition form on-site. Audition reservations are very much encouraged, though!
3. If you have submitted the form correctly and one of the time slots you requested is still available, you will get email confirming your audition appointment. (This is sent by a human being who has a day job, so don't worry if it doesn't come right away. But if it doesn’t come within a day or so, contact us at [auditions@pmrp.org](mailto:auditions@pmrp.org). You can also use that address to contact us if you have trouble submitting the form.)
4. Then check [our Audition Documents folder on Google Drive]({{ event.auditions.docs_link }}) and read over the synopses and character descriptions for all three plays and think a little bit about what you’re interested in — the voice roles listed there are available, but there also positions for sound-effects performance, tech crew, and various other things.

#### Before your audition
1. Print out (or download to your tablet) the audition sides from [our Google Drive Audition Docs folder]({{ event.auditions.docs_link }}). You’ll want to look over and/or rehearse them before your audition, and it will be very helpful if you can bring your copy to the audition (although we’ll have a few extra copies printed out). Sides and descriptions for all three segments have now been posted.
2. Then, show up for your audition at the scheduled time! Good luck and have fun!

#### A couple things to know
- Rehearsals will generally be on Mondays.
- **Walk-ins** are welcome, but **people with appointments will take priority**. If there are open slots, walk-ins will be able to audition on a first-come/first-served basis. Any remaining walk-ins will be auditioned at 10pm. Audition forms and sides will be available onsite for those who need them.
{% endif %}

{% endif %}
{% endfor %}
