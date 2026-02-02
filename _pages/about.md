---
permalink: /
title: ""
author_profile: true
redirect_from: 
  - /about/
  - /about.html
---
Greetings! My name is Shurui Liu.
I am an undergraduate student at School of Intelligent Systems Engineering, Sun Yat-sen University, Shenzhen, Guangdong, China.


During my undergraduate studies, I was supervised by Professor <a href="https://ise.sysu.edu.cn/teacher/teacher01/1411154.htm">Chenqiang Gao </a>. Currently, I am jointly supervised by Professors <a href="https://cse.sysu.edu.cn/teacher/ZhengWeishi">Weishi Zheng</a> and <a href="https://cse.sysu.edu.cn/teacher/WuAncong">Anchong Wu</a>.


I am also a Co-Founder of a startup, View our Project @<a href="paperpanza.com">PaperPanza.</a>

Looking for any Co-Working or intern.

{% include base_path %}
## Interest
<!-- <ul>
  <li>Enhancing LLM</li>
  <li>Native 3D Generation</li>
  <li>Interactive 3D Scene Generation</li>
  <!-- <li>Web Development (React, Next.js)</li> -->
<!-- </ul> --> -->
- Enhancing LLM
- Native 3D Generation & Interactive 3D Scene Generation
## News

- *2022.06* — Awarded the **National Scholarship**, Ministry of Education, China — one of the highest academic honors for undergraduates in China (<0.2% recipients)

## Publications

<ul>
{% for post in site.publications reversed %}
  {% if post.authors %}
    {% assign authors = post.authors %}
  {% elsif post.citation %}
    {% assign cit = post.citation | strip_html | replace: '&quot;','"' %}
    {% assign authors = cit | split: '(' | first | strip %}
  {% else %}
    {% assign authors = '' %}
  {% endif %}
  <li>
    <a href="{{ base_path }}{{ post.url }}">{{ post.title }}</a>{% if authors != '' %}, {{ authors }}{% endif %}{% if post.venue %}, {{ post.venue }}{% endif %}
  </li>
{% endfor %}
</ul>