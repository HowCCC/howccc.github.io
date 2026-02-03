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
<section class="page__content" itemprop="text">
## Interests

- <span style="font-family: 'FangSong', 'STFangsong', serif;">Enhancing LLM & Agent</span>
- <span style="font-family: 'FangSong', 'STFangsong', serif;">Native 3D Generation & Interactive 3D Scene Generation</span>


## News
- <span style="font-family: 'FangSong', 'STFangsong', serif;">*2023.06* — I participated in a teaching volunteer program in Meizhou, Guangdong, providing educational support to local children.</span>
![Teaching]({{ base_path }}/images/teaching.png)
- <span style="font-family: 'FangSong', 'STFangsong', serif;">*2022.06* — Awarded the **National Scholarship** , one of the highest honors for undergraduates in China (top 0.2%)</span>

## Publications

<div class="archive archive--cards">
  <div class="archive__grid">
    {% for post in site.publications reversed %}
      {% include archive-single.html type="card" %}
    {% endfor %}
  </div>
</div>
</section>