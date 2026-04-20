---
permalink: /
title: ""
author_profile: true
redirect_from: 
  - /about/
  - /about.html
---
<div class="about-intro">
  <p>Greetings! Here is Shurui Liu. I'm the first year M.S. student <a href="https://www.sysu.edu.cn/">@Sun Yat-sen University.</a> During my undergraduate studies, I received my B.S. degree under the supervision of  <a href="https://gaocq.github.io/">@Prof. Chenqiang Gao(高陈强)</a>. Currently, I'm jointly supervised by <a href="https://isee-ai.cn/~zhwshi/">@Prof. Wei-Shi Zheng(鄭偉詩)</a> and <a href="https://www.isee-ai.cn/~wuancong/index.html">@Ancong Wu(吴岸聪)</a>.</p>

  <p>I am also the co-founder of ElysianAI, a startup developing AI research assistants. View our project <a href="https://paperpanza.com">@PaperPanza</a>.</p>

  <style>
    .small-text {
      color: #2a7ae2;
      font-size: 14px;
    }
    /* 可选：让链接颜色也跟随字体颜色，或者保持默认蓝色 */
    .small-text a {
      color: inherit; 
      text-decoration: underline;
    }
    .small-text a:hover {
      opacity: 0.8;
    }
  </style>

  <!-- <p><span class="small-text">Phone: +86 15066883213</span></p> -->
  
  <!-- 修复部分开始 -->
  <!-- <p><span class="small-text">
    <a href="https://scholar.google.com/citations?user=dmqhrO0AAAAJ&hl=en&authuser=1">[Google Scholar]</a> &nbsp;&nbsp;&nbsp; 
    <a href="https://github.com/HowCCC/">[Github]</a> &nbsp;&nbsp;&nbsp; 
    <a href="mailto:liushr29@mail2.sysu.edu.cn">[Email]</a>
  </span></p> -->
  <!-- 修复部分结束 -->

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
  line-height: 1.0; /* 建议稍微增加行高，Libre Baskerville 这种字体在大行距下更美观 */
}

/* 3. 针对 News 部分的斜体进行优化 */
.page__content i, 
.page__content em {
  font-family: 'Libre Baskerville', serif !important;
  font-style: italic !important;
  color: #898585; /* 稍微调浅一点斜体的颜色，会显得更有高级感 */
}


/* 3. 核心修复：确保出版物卡片内的字体不被干扰 */
/* 强化版修复：确保出版物区域内所有元素恢复默认字体 */
.publication-grid, 
/* .publication-grid *, 选中 publication-grid 下的所有子元素 */
.publication-card__authors {
  font-family: italic !important;
  /* font-style: normal !important; 额外确保不会被强制斜体 */
}

/* 如果你的 publication-card.html 里用了特定的 span 或 em
.publication-grid span, 
.publication-grid em, 
.publication-grid i {
  font-family: italic !important;
} */


.page__content a,
.page__content a:visited {
  color: #e0527a !important;
  text-decoration: none !important;
}
.page__content a:hover {
  color: #e0527a !important;
  text-decoration: underline !important;
}

.about-intro,
.about-intro p,
.about-intro span,
.about-intro a {
  font-size: 15px;
  line-height: 1.55;
}

.about-intro .small-text,
.about-intro .small-text a {
  font-size: 14px;
  line-height: 1.45;
}
.news-section {
  max-height: 220px;
  overflow-y: auto;
  padding-right: 8px;
  margin-bottom: 10px;
}
.news-section::-webkit-scrollbar {
  width: 6px;
}
.news-section::-webkit-scrollbar-track {
  background: #f1f1f1;
  border-radius: 3px;
}
.news-section::-webkit-scrollbar-thumb {
  background: #bbb;
  border-radius: 3px;
}
.news-section::-webkit-scrollbar-thumb:hover {
  background: #888;
}
.news-item {
  padding: 4px 0;
  font-size: 14px;
  border-bottom: 1px dashed #eee;
  line-height: 1.55;
}
.news-item:last-child {
  border-bottom: none;
}
.news-date {
  font-weight: bold;
  color: #e0527a;
  min-width: 100px;
  display: inline-block;
}
.news-image {
  margin-top: 8px;
}

.pub-scroll-container {
  max-height: 800px;
  overflow-y: auto;
  padding-right: 8px;
}
.pub-scroll-container::-webkit-scrollbar {
  width: 6px;
}
.pub-scroll-container::-webkit-scrollbar-track {
  background: #f1f1f1;
  border-radius: 3px;
}
.pub-scroll-container::-webkit-scrollbar-thumb {
  background: #bbb;
  border-radius: 3px;
}
.pub-scroll-container::-webkit-scrollbar-thumb:hover {
  background: #888;
}

.pub-card {
  display: flex;
  align-items: flex-start;
  background: #f8f9fa;
  border: 1px solid #e9ecef;
  border-radius: 10px;
  padding: 16px;
  margin-bottom: 16px;
  transition: box-shadow 0.2s;
}
.pub-card:hover {
  box-shadow: 0 4px 12px rgba(0,0,0,0.1);
}
.pub-img {
  flex-shrink: 0;
  flex-basis: 180px;
  width: 180px;
  border-radius: 6px;
  margin-right: 18px;
  background: #e9ecef;
  overflow: hidden;
}
.pub-img img {
  display: block;
  width: 100%;
  height: auto;
  object-fit: contain;
}
.pub-img .placeholder {
  width: 100%;
  aspect-ratio: 3 / 2;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 36px;
  color: #adb5bd;
}
.pub-info {
  flex: 1;
  min-width: 0;
}
.pub-title {
  font-weight: 700;
  font-size: 15px;
  margin-bottom: 5px;
  line-height: 1.4;
}
.pub-authors {
  font-size: 13px;
  color: #555;
  margin-bottom: 3px;
  line-height: 1.5;
}
.page__content p.pub-note {
  font-size: 14px;
  color: #555;
  line-height: 1.0;
}
.pub-venue {
  font-size: 13px;
  color: red;
  font-style: italic;
  margin-bottom: 8px;
  line-height: 1.4;
}
.pub-links a {
  display: inline-block;
  padding: 3px 10px;
  margin-right: 6px;
  margin-bottom: 4px;
  font-size: 12px;
  border: 1px solid #dee2e6;
  border-radius: 4px;
  color: #495057 !important;
  text-decoration: none !important;
  background: #fff;
  transition: all 0.15s;
}
.pub-links a:visited {
  color: #495057 !important;
}
.pub-links a:hover,
.pub-links a:active,
.pub-links a:focus {
  background: #f1f3f5;
  color: #495057 !important;
  border-color: #ced4da;
  text-decoration: none !important;
}

@media (max-width: 600px) {
  .pub-card {
    flex-direction: column;
  }
  .pub-img {
    flex-basis: auto;
    width: 100%;
    margin-right: 0;
    margin-bottom: 12px;
  }
}

html[data-theme="dark"] .news-date { color: #f48fb1; }
html[data-theme="dark"] .news-item { color: #eaeaea; border-bottom-color: #555; }
html[data-theme="dark"] .pub-card { background: #3a3a3a; border-color: #555; }
html[data-theme="dark"] .pub-title { color: #eaeaea; }
html[data-theme="dark"] .pub-authors { color: #ccc; }
html[data-theme="dark"] .pub-note { color: #ccc; }
html[data-theme="dark"] .pub-venue { color: red; }
html[data-theme="dark"] .pub-links a { background: #4a4a4a; color: #eaeaea !important; border-color: #666; }
html[data-theme="dark"] .pub-links a:visited { color: #eaeaea !important; }
html[data-theme="dark"] .pub-links a:hover,
html[data-theme="dark"] .pub-links a:active,
html[data-theme="dark"] .pub-links a:focus {
  background: #5a5a5a;
  color: #eaeaea !important;
  border-color: #7a7a7a;
  text-decoration: none !important;
}
html[data-theme="dark"] .pub-img { background: #4a4a4a; }
html[data-theme="dark"] .pub-scroll-container::-webkit-scrollbar-track { background: #3a3a3a; }
html[data-theme="dark"] .pub-scroll-container::-webkit-scrollbar-thumb { background: #666; }
html[data-theme="dark"] .news-section::-webkit-scrollbar-track { background: #3a3a3a; }
html[data-theme="dark"] .news-section::-webkit-scrollbar-thumb { background: #666; }
</style>
## Interests

<div>
  <div class="news-item">Enhancing LLM &amp; Agent</div>
  <div class="news-item">Native 3D Generation &amp; Reconstruction </div>
  <div class="news-item">Video &amp; Interactive Scene Generation</div>
</div>

## News

<div class="news-section">
{% assign news_items = site.news | sort: 'date' | reverse %}
{% for item in news_items %}
  <div class="news-item">
    <span class="news-date">{{ item.date | date: "%Y.%m" }}</span> {{ item.summary | markdownify | remove: "<p>" | remove: "</p>" }}
    {% if item.image %}
      <div class="news-image" style="text-align: center;">
        <img src="{{ base_path }}/images/{{ item.image }}" alt="{{ item.image_alt | default: '' }}" class="about-image-hover" style="max-width: 100%; height: auto;" />
      </div>
    {% endif %}
    {% if item.content and item.content != '' %}
      <div>{{ item.content }}</div>
    {% endif %}
  </div>
{% endfor %}
</div>

## Publications

<p class="pub-note"> ✉ denotes corresponding author. * denotes equal contribution. </p>

<div class="pub-scroll-container">
  {% assign publication_items = site.publications | sort: 'date' | reverse %}
  {% for post in publication_items %}
    {% if post.teaser %}
      {% assign teaser = post.teaser %}
    {% elsif post.header.teaser %}
      {% capture teaser %}{{ post.header.teaser }}{% endcapture %}
    {% else %}
      {% assign teaser = nil %}
    {% endif %}

    <div class="pub-card">
      <div class="pub-img">
        {% if teaser %}
          <img src=
            {% if teaser contains "://" %}
              "{{ teaser }}"
            {% else %}
              "{{ teaser | prepend: "/images/" | prepend: base_path }}"
            {% endif %}
            alt="{{ post.title | escape }}">
        {% else %}
          <div class="placeholder">&#128196;</div>
        {% endif %}
      </div>
      <div class="pub-info">
        <div class="pub-title">{{ post.title }}</div>

        {% if post.authors %}
          <div class="pub-authors">
            {% assign author_list = post.authors | split: ',' %}
            {% for author in author_list %}
              {% assign name = author | strip %}
              {% if name == site.author.name or name == "Shurui Liu" %}
                <strong>{{ name }}</strong>
              {% else %}
                {{ name }}
              {% endif %}
              {% if post.corresponding_authors and post.corresponding_authors contains name %}&#9993;{% elsif post.corresponding and post.corresponding == name %}&#9993;{% endif %}
              {% unless forloop.last %}, {% endunless %}
            {% endfor %}
          </div>
        {% endif %}

        {% if post.venue %}
          <div class="pub-venue">{{ post.venue }}</div>
        {% endif %}

        {% assign project_link = post.projecturl | default: post.project_url | default: post.project %}
        {% assign paper_link = post.paperurl | default: post.paper_url | default: post.pdfurl | default: post.pdf_url %}
        {% assign code_link = post.codeurl | default: post.code_url %}
        {% assign bib_link = post.bibtexurl | default: post.bibtex_url %}
        {% assign slides_link = post.slidesurl | default: post.slides_url %}
        {% if project_link or paper_link or code_link or bib_link or slides_link or post.link %}
          <div class="pub-links">
            {% if project_link %}<a href="{{ project_link }}" target="_blank" rel="noopener noreferrer">Project</a>{% endif %}
            {% if paper_link %}<a href="{{ paper_link }}" target="_blank" rel="noopener noreferrer">PDF</a>{% endif %}
            {% if code_link %}<a href="{{ code_link }}" target="_blank" rel="noopener noreferrer">Code</a>{% endif %}
            {% if bib_link %}<a href="{{ bib_link }}" target="_blank" rel="noopener noreferrer">Bib</a>{% endif %}
            {% if slides_link %}<a href="{{ slides_link }}" target="_blank" rel="noopener noreferrer">Slides</a>{% endif %}
            {% if post.link and post.link != project_link and post.link != paper_link and post.link != code_link and post.link != bib_link and post.link != slides_link %}
              <a href="{{ post.link }}" target="_blank" rel="noopener noreferrer">Link</a>
            {% endif %}
          </div>
        {% endif %}
      </div>
    </div>
  {% endfor %}
</div>

## Miscs
<div>
  <div class="news-item">I'm leading Concise Generation Guided curating code centric tutorials to deconstruct generative models. View <a href="https://your-link-here">@here</a>.</div>
  <div class="news-item">I have delivered some documents specifically for Web3. <a href="{{ '/teaching/consensus.pdf' | relative_url }}">[Consensus]</a></div>
  <div class="news-item">🏊/🎾/🎧/🎿 are my vibe.</div>
</div>
