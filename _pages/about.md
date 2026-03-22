---
permalink: /
title: ""
author_profile: true
redirect_from: 
  - /about/
  - /about.html
---
<div>
  <p>Greetings! Here is Sherry Liu. I am a Master student <a href="https://www.sysu.edu.cn/">@SUN-YAT SEN UNIVERSITY(中山大学).</a> During my undergraduate studies, I received my B.S. degree under the supervision of Professor <a href="https://ise.sysu.edu.cn/teacher/teacher01/1411154.htm">@Chenqiang Gao(高陈强)</a>. Currently, I am jointly supervised by Professors <a href="https://cse.sysu.edu.cn/teacher/ZhengWeishi">@Weishi Zheng(郑伟诗)</a> and <a href="https://cse.sysu.edu.cn/teacher/WuAncong">@Ancong Wu(吴岸聪)</a>.</p>

  <p>I am also the co-founder of ElysianAI, a startup developing AI research assistants. View our project <a href="https://paperpanza.com">@PaperPanza</a>.</p>

  <p><span style="color: red;">Phone: +86 15066883213</span></p>

  <p>Looking for any internship opportunities and collaborations.</p>

</div>

{% include base_path %}
<style>
/* 1. 引入字体 */
@import url('https://fonts.googleapis.com/css2?family=Libre+Baskerville:ital,wght@0,400;0,700;1,400&display=swap');

.page__content,
.page__content p,
.page__content li,
.page__content span,
.page__content div {
  /* 2. 修改优先级：将 Libre Baskerville 放在最前面 */
  font-family: 'Libre Baskerville', 'Adobe Caslon Pro', 'Caslon', serif !important;
  line-height: 1.6; /* 建议稍微增加行高，Libre Baskerville 这种字体在大行距下更美观 */
}

/* 3. 针对 News 部分的斜体进行优化 */
.page__content i, 
.page__content em {
  font-family: 'Libre Baskerville', serif !important;
  font-style: italic !important;
  color: #555; /* 稍微调浅一点斜体的颜色，会显得更有高级感 */
}

.page__content a,
.page__content a:visited {
  color: #c264e7 !important;
  text-decoration: none !important;
}
.page__content a:hover {
  color: #c264e7 !important;
  text-decoration: underline !important;
}
</style>
## Interests

- Enhancing LLM & Agent
- Native 3D Generation & Interactive 3D Scene Generation
- Video Generation



## News

- <i>2026.03</i> — One paper was accepted by <span style="color: red; font-style: italic;">CVPR 2026.</span>

- <i>2023.06</i> — I participated in a teaching volunteer program in Meizhou, Guangdong, providing educational support to local children.

  <div style="text-align: center; margin: 1rem 0;">
    <img src="{{ base_path }}/images/teaching.png" alt="Teaching" class="about-image-hover" style="max-width: 100%; height: auto;" />
  </div>

- <i>2022.12</i> — Launch the project **Concise Generation** which provided detailed guidance for modern generation pipeline.



- <i>2022.06</i> — Awarded the **National Scholarship**, one of the highest honors for undergraduates in China (top 0.2%)

## Publications

<p>Selected Publications. * Corresponding author.</p>

<div class="publication-grid">
  {% for post in site.publications reversed %}
    {% include publication-card.html post=post %}
  {% endfor %}
</div>

## Miscs
<div>
  <ul>
    <li>
      <p>I'm leading Concise Generation Guided curating code centric tutorials to deconstruct generative models. View <a href="https://your-link-here">@here</a>.</p>
      <div style="text-align: center; margin: 1rem 0;">
        <img src="{{ base_path }}/images/concisegeneration.png" 
             alt="ConciseGeneration" 
             class="about-image-hover"
             width="500" />
      </div>
    </li>
    <li>
      <p>🏊 & 🎾 & 🎧 & 📸 are my vibe.</p>
    </li>
  </ul>
</div>


