---
title: Sitemap
permalink: "/sitemap.html"
eleventyExcludeFromCollections: true
---

{% extends "base.njk" %}

{% block main %}

{% for item in collections.all | eleventyNavigation("home") %}
  <h2>
    <a href="{{ item.url | url | pretty }}">{{ item.title }}</a>
  </h2>
  {% if item.excerpt %}<p>{{ item.excerpt }}</p>{% endif %}
  {{ collections.all | eleventyNavigation(item.key) | eleventyNavigationToHtml({
    listClass: "list"
  }) | safe }}
{% endfor %}

{% endblock %}
