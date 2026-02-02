---
permalink: /
title: ""
author_profile: true
redirect_from: 
  - /about/
  - /about.html
---
<div style="font-family: 'FangSong', 'STFangsong', '仿宋', serif;">

Greetings! My name is Shurui Liu. I am a Master's student at the School of Computer Science, Sun Yat-sen University, Guangzhou, Guangdong, China.

During my undergraduate studies, I was supervised by Professor <a href="https://ise.sysu.edu.cn/teacher/teacher01/1411154.htm">Chenqiang Gao</a>. Currently, I am jointly supervised by Professors <a href="https://cse.sysu.edu.cn/teacher/ZhengWeishi">Weishi Zheng</a> and <a href="https://cse.sysu.edu.cn/teacher/WuAncong">Ancong Wu</a>.

I am also a co-founder of a startup. View our project at <a href="https://paperpanza.com">PaperPanza</a>. I'm currently seeking co-working opportunities or internships.

</div>



{% include base_path %}
## Interest

- Enhancing LLM
- Native 3D Generation & Interactive 3D Scene Generation


## News

- *2022.06* — Awarded the **National Scholarship**, Ministry of Education, China — one of the highest academic honors for undergraduates in China (<0.2% recipients)

## Publications

<ul>
{% for post in site.publications reversed %}
  {%- comment -%} Build an authors list (works with comma-separated string, array, or citation fallback) {%- endcomment -%}
  {% if post.authors %}
    {% if post.authors contains ',' %}
      {% assign authors_list = post.authors | split: ',' %}
    {% else %}
      {% assign authors_list = post.authors %}
    {% endif %}
  {% elsif post.citation %}
    {% assign cit = post.citation | strip_html | replace: '&quot;','"' %}
    {% assign authors_str = cit | split: '(' | first | strip %}
    {% assign authors_list = authors_str | split: ',' %}
  {% else %}
    {% assign authors_list = '' %}
  {% endif %}

  <li>
    <a href="{{ base_path }}{{ post.url }}">{{ post.title }}</a>
    {% if authors_list and authors_list != '' %}, {% for a in authors_list %}{% assign name = a | strip %}{% if name == site.author.name %}<strong>{{ name }}</strong>{% else %}{{ name }}{% endif %}{% if post.corresponding_authors and post.corresponding_authors contains name %}*{% elsif post.corresponding and post.corresponding == name %}*{% endif %}{% if forloop.last == false %}, {% endif %}{% endfor %}{% endif %}{% if post.venue %}, {{ post.venue }}{% endif %}
  </li>
{% endfor %}
</ul>