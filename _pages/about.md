---
permalink: /
title: ""
author_profile: true
redirect_from: 
  - /about/
  - /about.html
---
<div style="font-family: 'FangSong', 'STFangsong', '仿宋', serif;">
  <p>Greetings! My name is Shurui Liu(刘书睿). I am a Master's student at the School of Computer Science, Sun Yat-sen University, Guangzhou, Guangdong, China. During my undergraduate studies, I was supervised by Professor <a href="https://ise.sysu.edu.cn/teacher/teacher01/1411154.htm">@Chenqiang Gao</a>. Currently, I am jointly supervised by Professors <a href="https://cse.sysu.edu.cn/teacher/ZhengWeishi">@Weishi Zheng</a> and <a href="https://cse.sysu.edu.cn/teacher/WuAncong">@Ancong Wu</a>.</p>

  <p>I am also the co-founder of ElysianAI, a startup developing AI research assistants. View our project <a href="https://paperpanza.com">@PaperPanza</a>. I'm currently seeking co-working opportunities or internships.</p>

  <p><span style="color: red;">Phone: +86 15066883213</span></p>
</div>

{% include base_path %}
## Interests

- <span style="font-family: 'FangSong', 'STFangsong', serif;">Enhancing LLM & Agent</span>
- <span style="font-family: 'FangSong', 'STFangsong', serif;">Native 3D Generation & Interactive 3D Scene Generation</span>


## News

- <span style="font-family: 'FangSong', 'STFangsong', serif;">*2023.06* — I participated in a teaching volunteer program in Meizhou, Guangdong, providing educational support to local children.</span>

![Teaching]({{ base_path }}/images/teaching.png)

- <span style="font-family: 'FangSong', 'STFangsong', serif;">*2022.06* — Awarded the **National Scholarship** , one of the highest honors for undergraduates in China (top 0.2%)</span>

<style>
/* Force horizontal card layout for Publications on narrow content columns */
.archive--cards .archive__grid > .card__item { display:flex !important; flex-direction:row !important; align-items:flex-start !important; gap:1rem !important; width:100% !important; box-sizing:border-box !important; }
.archive--cards .archive__grid > .card__item .archive__item-teaser { flex:0 0 220px !important; min-width:160px !important; max-width:40% !important; margin-right:1rem !important; }
.archive--cards .archive__grid > .card__item .archive__item-teaser img { width:100% !important; height:160px !important; object-fit:cover !important; display:block !important; }
.archive--cards .archive__grid > .card__item .archive__item-body { flex:1 1 auto !important; display:flex !important; flex-direction:column !important; justify-content:flex-start !important; }
</style>
<section class="page__content" itemprop="text">
## Publications

<div class="archive archive--cards">
  <div class="archive__grid">
    {% for post in site.publications reversed %}
      {% include archive-single.html type="card" %}
    {% endfor %}
  </div>
</div>
</section>