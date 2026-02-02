---
permalink: /
title: ""
author_profile: true
redirect_from: 
  - /about/
  - /about.html
---
<div style="font-family: 'FangSong', 'STFangsong', '仿宋', serif;">
  <p>Greetings! My name is Shurui Liu. I am a Master's student at the School of Computer Science, Sun Yat-sen University, Guangzhou, Guangdong, China. During my undergraduate studies, I was supervised by Professor <a href="https://ise.sysu.edu.cn/teacher/teacher01/1411154.htm">@Chenqiang Gao</a>. Currently, I am jointly supervised by Professors <a href="https://cse.sysu.edu.cn/teacher/ZhengWeishi">@Weishi Zheng</a> and <a href="https://cse.sysu.edu.cn/teacher/WuAncong">@Ancong Wu</a>.</p>

  <p>I am also a co-founder of a startup. View our project <a href="https://paperpanza.com">@PaperPanza</a>. I'm currently seeking co-working opportunities or internships.</p>

  <p><span style="color: red;">Phone: +86 15066883213</span></p>
</div>

{% include base_path %}
## Interest

- <span style="font-family: 'FangSong', 'STFangsong', serif;">Enhancing LLM</span>
- <span style="font-family: 'FangSong', 'STFangsong', serif;">Native 3D Generation & Interactive 3D Scene Generation</span>


## News
- <span style="font-family: 'FangSong', 'STFangsong', serif;">*2023.06* — I participated in a teaching volunteer program in Meizhou, Guangdong, providing educational support to local children.</span>
![Teaching]({{ base_path }}/images/teaching.png)
- <span style="font-family: 'FangSong', 'STFangsong', serif;">*2022.06* — Awarded the **National Scholarship** , one of the highest honors for undergraduates in China (top 0.2%)</span>

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