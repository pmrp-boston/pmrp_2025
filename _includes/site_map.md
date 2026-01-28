<h2>Site Map</h2>

<h3>Pages</h3>

{% assign sorted_pages = site.pages | sort: "path" %}

{% capture pages_table %}
<table>
<thead>
<th>Title</th>
<th>Path</th>
<th>URL</th>
</thead>
<tbody>
{% for page in sorted_pages %}
<tr>
<td><a href="{{ page.url | relative_url }}">{{ page.title | default: page.name }}</a></td>
<td>{{ page.path }}</td>
<td>{{ page.url }}</td>
</tr>
{% endfor %}
</tbody>
</table>
{% endcapture %}

{% include responsive_xscroll.html content=pages_table %}

<h3>Seasons</h3>

{% assign sorted_seasons = site.seasons | sort: "season_id" %}

{% capture seasons %}
<table>
<thead>
<th>Title</th>
<th>Path</th>
<th>URL</th>
</thead>
<tbody>
{% for page in sorted_seasons %}
<tr>
<td><a href="{{ page.url | relative_url }}">{{ page.title | default: page.name }}</a></td>
<td>{{ page.path }}</td>
<td>{{ page.url }}</td>
</tr>
{% endfor %}
</tbody>
</table>
{% endcapture %}

{% include responsive_xscroll.html content=seasons %}

<h3>Events</h3>

{% assign sorted_events = site.events | sort: "season_id" | reverse %}

{% capture events %}
<table>
<thead>
<th>Title</th>
<th>Path</th>
<th>URL</th>
<th>Season</th>
</thead>
<tbody>
{% for page in sorted_events %}
<tr>
<td><a href="{{ page.url | relative_url }}">{{ page.title | default: page.name }}</a></td>
<td>{{ page.path }}</td>
<td>{{ page.url }}</td>
<td>{{ page.season_id }}</td>
</tr>
{% endfor %}
</tbody>
</table>
{% endcapture %}

{% include responsive_xscroll.html content=events %}

<h3>Venues</h3>
{% assign sorted_venues = site.venues | sort: "path" %}

{% capture venues %}
<table>
<thead>
<th>Title</th>
<th>Path</th>
<th>URL</th>
</thead>
<tbody>
{% for page in sorted_venues %}
<tr>
<td><a href="{{ page.url | relative_url }}">{{ page.title | default: page.name }}</a></td>
<td>{{ page.path }}</td>
<td>{{ page.url }}</td>
</tr>
{% endfor %}
</tbody>
</table>
{% endcapture %}

{% include responsive_xscroll.html content=venues %}

<h3>Posts</h3>
{% assign sorted_posts = site.posts | sort: "path" %}

{% capture posts %}
<table>
<thead>
<th>Title</th>
<th>Path</th>
<th>URL</th>
</thead>
<tbody>
{% for page in sorted_posts %}
<tr>
<td><a href="{{ page.url | relative_url }}">{{ page.title | default: page.name }}</a></td>
<td>{{ page.path }}</td>
<td>{{ page.url }}</td>
</tr>
{% endfor %}
</tbody>
</table>
{% endcapture %}

{% include responsive_xscroll.html content=posts %}
