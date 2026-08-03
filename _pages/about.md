---
permalink: /
title: ""
author_profile: true
redirect_from: 
  - /about/
  - /about.html
---
<div class="about-intro">
  <div class="hello-animation" aria-hidden="true">
    <img src="{{ '/images/Hello!.svg' | relative_url }}" alt="">
  </div>
  <p>Greetings! Here is Shurui Liu. I'm a 2<sup>nd</sup> year student <a href="https://www.sysu.edu.cn/">@Sun Yat-sen University.</a> During my undergraduate studies, I received my B.S. degree under the supervision of  <a href="https://gaocq.github.io/">@Prof. Chenqiang Gao(高陈强)</a>. Currently, I'm jointly supervised by <a href="https://isee-ai.cn/~zhwshi/">@Prof. Wei-Shi Zheng(鄭偉詩)</a> and <a href="https://www.isee-ai.cn/~wuancong/index.html">@Ancong Wu(吴岸聪)</a>.</p>

  <p>Beyond academic research, I'm the Founder of <a href="https://chat.promptlycad.com">@RoCAD</a> aiming to craft 3d asset by text. Iam also the co-founder of ElysianAI, a startup developing AI research assistants. View our project <a href="https://paperpanza.com">@PaperPanza</a>.</p>

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

  <p>Looking for any opportunities or collaborations.</p>
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
.hello-animation {
  float: right;
  width: 200px;
  height: 110px;
  margin: -6px 25px 8px 8px;
  overflow: hidden;
  pointer-events: none;
}
.hello-animation img {
  display: block;
  width: 330px;
  height: 330px;
  max-width: none !important;
  transform: translate(-60px, -118px);
}
@media (max-width: 600px) {
  .hello-animation {
    float: none;
    width: 180px;
    height: 100px;
    margin: 0 auto 10px;
  }
  .hello-animation img {
    width: 300px;
    height: 300px;
    transform: translate(-55px, -108px);
  }
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
}
.news-item__body {
  display: grid;
  grid-template-columns: 100px minmax(0, 1fr);
  column-gap: 0.5rem;
  align-items: start;
}
.news-item__summary {
  min-width: 0;
}
.news-image {
  margin-top: 8px;
}

.pub-scroll-container {
  max-height: 800px;
  overflow-y: auto;
  padding-right: 8px;
  margin-top: 14px;
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
  align-items: center;
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
.pub-card--first-author {
  background: #eef0f2;
  border-color: #d5d9dd;
}
.pub-img {
  flex-shrink: 0;
  flex-basis: 210px;
  width: 210px;
  border-radius: 6px;
  margin-right: 18px;
  background: #e9ecef;
  overflow: hidden;
  transition: box-shadow 0.2s, transform 0.2s;
}
.pub-img.pub-img--transparent {
  background: transparent;
}
.pub-img:hover {
  box-shadow: 0 8px 16px rgba(0,0,0,0.16);
  transform: translateY(-2px);
}
.pub-img img {
  display: block;
  width: 100%;
  height: auto;
  object-fit: contain;
  transition: transform 0.2s;
}
.pub-img:hover img {
  transform: scale(1.04);
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
  font-size: 13px;
  margin-bottom: 5px;
  line-height: 1.4;
}
.pub-authors {
  font-size: 12px;
  color: #555;
  margin-bottom: 3px;
  line-height: 1.5;
}
.page__content p.pub-note {
  font-size: 14px;
  color: #555;
  line-height: 1.0;
  display: inline;
}
.pub-highlight-swatch {
  display: inline-block;
  width: 12px;
  height: 12px;
  margin: 0 4px 0 10px;
  border-radius: 3px;
  background: #eef0f2;
  border: 1px solid #d5d9dd;
  vertical-align: -1px;
}
.pub-venue {
  font-size: 12px;
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
  font-size: 11px;
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
html[data-theme="dark"] .pub-card.pub-card--first-author { background: #3a3a3a; border-color: #555; }
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
html[data-theme="dark"] .pub-img.pub-img--transparent { background: transparent; }
html[data-theme="dark"] .pub-scroll-container::-webkit-scrollbar-track { background: #3a3a3a; }
html[data-theme="dark"] .pub-scroll-container::-webkit-scrollbar-thumb { background: #666; }
html[data-theme="dark"] .news-section::-webkit-scrollbar-track { background: #3a3a3a; }
html[data-theme="dark"] .news-section::-webkit-scrollbar-thumb { background: #666; }
</style>

<style>
.experience-grid {
  display: grid;
  grid-template-columns: repeat(2, minmax(0, 1fr));
  gap: 16px;
  margin: 0 0 24px;
}
.experience-card {
  display: flex;
  align-items: center;
  min-width: 0;
  padding: 14px 16px;
  border: 1px solid #e9ecef;
  border-radius: 10px;
  background: #f8f9fa;
  transition: box-shadow 0.2s;
}
.experience-card:hover {
  box-shadow: 0 4px 12px rgba(0,0,0,0.1);
}
.experience-logo {
  display: flex;
  flex: 0 0 76px;
  align-items: center;
  justify-content: center;
  width: 76px;
  height: 76px;
  margin-right: 14px;
  border-radius: 8px;
  background: transparent;
  overflow: hidden;
  transition: box-shadow 0.2s, transform 0.2s;
}
.experience-logo:hover {
  box-shadow: 0 8px 16px rgba(0,0,0,0.16);
  transform: translateY(-2px);
}
.experience-logo img {
  display: block;
  max-width: 100%;
  max-height: 100%;
  object-fit: contain;
  transition: transform 0.2s;
}
.experience-logo:hover img {
  transform: scale(1.04);
}
.experience-info {
  min-width: 0;
  font-size: 12px;
  line-height: 1.8;
}
.experience-role {
  font-size: 13px;
  font-weight: 700;
  margin-bottom: 2px;
}
.experience-role a {
  color: #e0527a !important;
  text-decoration: none !important;
}
.experience-role a:hover,
.experience-mentor a:hover {
  text-decoration: underline !important;
}
.experience-time,
.experience-mentor {
  color: #555;
}
.experience-mentor {
  margin-top: 2px;
}
.experience-mentor a {
  color: #e0527a !important;
  text-decoration: none !important;
}
.experience-description {
  margin-top: 6px;
  color: #495057;
}
html[data-theme="dark"] .experience-card { background: #3a3a3a; border-color: #555; }
html[data-theme="dark"] .experience-logo { background: transparent; }
html[data-theme="dark"] .experience-info,
html[data-theme="dark"] .experience-time,
html[data-theme="dark"] .experience-mentor,
html[data-theme="dark"] .experience-description { color: #d6d6d6; }
html[data-theme="dark"] .experience-role a,
html[data-theme="dark"] .experience-mentor a { color: #f48fb1 !important; }
@media (max-width: 700px) {
  .experience-grid { grid-template-columns: 1fr; }
}
html[data-theme="dark"] .section-toc a { color: #d6d6d6 !important; }
html[data-theme="dark"] .section-toc a:hover { color: #f48fb1 !important; }
html[data-theme="dark"] .section-toc li::before { background: #3a3a3a; border-color: #777; }
html[data-theme="dark"] .section-toc li.is-active::before { background: #f48fb1; border-color: #f48fb1; }
@media (min-width: 1300px) {
  .section-toc {
    position: fixed;
    top: 50%;
    right: max(0px, calc((100vw - 1280px) / 2 - 4px));
    z-index: 10;
    width: 172px;
    transform: translateY(-50%);
  }
  .section-toc__list {
    position: relative;
    display: flex;
    flex-direction: column;
    gap: 14px;
    margin: 0;
    padding: 4px 34px 4px 0;
    list-style: none;
  }
  .section-toc__list::before {
    position: absolute;
    top: 8px;
    bottom: 8px;
    right: 20px;
    border-left: 1px dashed #c5c9cd;
    content: "";
  }
  .section-toc li {
    position: relative;
    margin: 0;
    text-align: right;
  }
  .section-toc li::before {
    position: absolute;
    top: 50%;
    right: -19px;
    width: 7px;
    height: 7px;
    border: 1px solid #9da3a8;
    border-radius: 50%;
    background: #fff;
    content: "";
    transform: translateY(-50%);
    transition: border-color 0.2s, background 0.2s;
  }
  .section-toc li::after {
    position: absolute;
    top: 50%;
    right: -29px;
    width: 14px;
    border-top: 2px solid #e0527a;
    content: "";
    opacity: 0;
    transform: translateY(-50%);
    transition: opacity 0.2s;
  }
  .section-toc a {
    position: relative;
    display: block;
    color: #333 !important;
    font-family: "Sidebar Comic Sans", "Comic Sans MS", cursive !important;
    font-size: 14px;
    line-height: 1.3;
    text-decoration: none;
    white-space: nowrap;
  }
  .section-toc a::after {
    position: absolute;
    top: 50%;
    right: -36px;
    width: 8px;
    height: 16px;
    border: 2px solid #e0527a;
    border-left: 0;
    border-radius: 0 10px 10px 0;
    content: "";
    opacity: 0;
    transform: translateY(-50%);
    transition: opacity 0.2s;
  }
  .section-toc a:hover,
  .section-toc a:focus {
    color: #e0527a !important;
    text-decoration: underline;
  }
  .section-toc li.is-active::before {
    border-color: #e0527a;
    background: #e0527a;
  }
  .section-toc li.is-active::after,
  .section-toc li.is-active a::after {
    opacity: 1;
  }
  .section-toc li.is-active a {
    color: #e0527a !important;
    font-weight: 700;
  }
}
@media (max-width: 1299px) {
  .section-toc { display: none; }
}
</style>

<nav class="section-toc" aria-label="Page sections">
  <ul class="section-toc__list">
    <li><a href="#interests">Interests</a></li>
    <li><a href="#news">News</a></li>
    <li><a href="#publications">Publications</a></li>
    <li><a href="#education">Education</a></li>
    <li><a href="#experience">Experience</a></li>
    <li><a href="#honors">Honors &amp; Rewards</a></li>
    <li><a href="#miscs">Miscs</a></li>
  </ul>
</nav>

<script>
document.addEventListener("DOMContentLoaded", function () {
  var toc = document.querySelector(".section-toc");
  if (!toc) return;

  var links = Array.from(toc.querySelectorAll('a[href^="#"]'));
  var sections = links.map(function (link) {
    return document.querySelector(link.getAttribute("href"));
  }).filter(Boolean);

  function updateActiveSection() {
    if (!sections.length) return;

    var marker = window.innerHeight * 0.35;
    var active = sections[0];
    sections.forEach(function (section) {
      if (section.getBoundingClientRect().top <= marker) active = section;
    });
    if (window.scrollY + window.innerHeight >= document.documentElement.scrollHeight - 2) {
      active = sections[sections.length - 1];
    }

    links.forEach(function (link) {
      var isActive = link.getAttribute("href") === "#" + active.id;
      link.parentElement.classList.toggle("is-active", isActive);
      if (isActive) link.setAttribute("aria-current", "location");
      else link.removeAttribute("aria-current");
    });
  }

  var ticking = false;
  function requestUpdate() {
    if (ticking) return;
    ticking = true;
    window.requestAnimationFrame(function () {
      updateActiveSection();
      ticking = false;
    });
  }

  window.addEventListener("scroll", requestUpdate, { passive: true });
  window.addEventListener("resize", requestUpdate);
  updateActiveSection();
});
</script>

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
    <div class="news-item__body">
      <span class="news-date">{{ item.date | date: "%Y.%m" }}</span>
      <span class="news-item__summary">{{ item.summary | markdownify | remove: "<p>" | remove: "</p>" }}</span>
    </div>
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

<p class="pub-note"> ✉ denotes corresponding author.  * denotes equal contribution. </p>



<p class="pub-note pub-highlight-note"><span class="pub-highlight-swatch" aria-hidden="true"></span> indicates a highlighted paper.</p>


<div class="pub-scroll-container">
  {% assign publication_items = site.publications | sort: 'order' | reverse %}
  {% for post in publication_items %}
    {% if post.teaser %}
      {% assign teaser = post.teaser %}
    {% elsif post.header.teaser %}
      {% capture teaser %}{{ post.header.teaser }}{% endcapture %}
    {% else %}
      {% assign teaser = nil %}
    {% endif %}

    {% assign first_author = post.authors | split: ',' | first | strip %}
    <div class="pub-card{% if first_author == site.author.name or first_author == 'Shurui Liu' %} pub-card--first-author{% endif %}">
      <div class="pub-img{% if post.transparent_teaser %} pub-img--transparent{% endif %}">
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
              {% assign author_entry = site.data.authors[name] %}
              {% assign author_uri = author_entry.uri %}
              {% if name == site.author.name or name == "Shurui Liu" %}
                {% if author_uri %}<a href="{{ author_uri }}" target="_blank" rel="noopener noreferrer"><strong>{{ name }}</strong></a>{% else %}<strong>{{ name }}</strong>{% endif %}
              {% elsif author_uri %}
                <a href="{{ author_uri }}" target="_blank" rel="noopener noreferrer">{{ name }}</a>
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

        {% assign project_href = post.projecturl | default: post.project_url | default: post.project %}
        {% assign paper_href = post.paperurl | default: post.paper_url | default: post.pdfurl | default: post.pdf_url %}
        {% assign code_href = post.codeurl | default: post.code_url %}
        {% assign bib_href = post.bibtexurl | default: post.bibtex_url %}
        {% assign slides_href = post.slidesurl | default: post.slides_url %}
        {% assign post_href = post.link %}
        {% capture project_link %}{% include resolve-link.html href=project_href %}{% endcapture %}
        {% capture paper_link %}{% include resolve-link.html href=paper_href %}{% endcapture %}
        {% capture code_link %}{% include resolve-link.html href=code_href %}{% endcapture %}
        {% capture bib_link %}{% include resolve-link.html href=bib_href %}{% endcapture %}
        {% capture slides_link %}{% include resolve-link.html href=slides_href %}{% endcapture %}
        {% capture post_link %}{% include resolve-link.html href=post_href %}{% endcapture %}
        {% if project_link != '' or paper_link != '' or code_link != '' or bib_link != '' or slides_link != '' or post_link != '' %}
          <div class="pub-links">
            {% if project_link != '' %}<a href="{{ project_link }}" target="_blank" rel="noopener noreferrer">Project</a>{% endif %}
            {% if paper_link != '' %}<a href="{{ paper_link }}" target="_blank" rel="noopener noreferrer">PDF</a>{% endif %}
            {% if code_link != '' %}<a href="{{ code_link }}" target="_blank" rel="noopener noreferrer">Code</a>{% endif %}
            {% if bib_link != '' %}<a href="{{ bib_link }}" target="_blank" rel="noopener noreferrer">Bib</a>{% endif %}
            {% if slides_link != '' %}<a href="{{ slides_link }}" target="_blank" rel="noopener noreferrer">Slides</a>{% endif %}
            {% if post_link != '' and post_link != project_link and post_link != paper_link and post_link != code_link and post_link != bib_link and post_link != slides_link %}
              <a href="{{ post_link }}" target="_blank" rel="noopener noreferrer">Link</a>
            {% endif %}
          </div>
        {% endif %}
      </div>
    </div>
  {% endfor %}
</div>

## Education

<div class="experience-grid education-grid">
  {% assign education_items = site.educations | sort: 'order' | reverse %}
  {% for education in education_items %}
    <div class="experience-card education-card">
      <div class="experience-logo education-logo">
        {% if education.logo contains "://" %}
          <img src="{{ education.logo }}" alt="{{ education.institution | escape }} logo">
        {% else %}
          <img src="{{ education.logo | relative_url }}" alt="{{ education.institution | escape }} logo">
        {% endif %}
      </div>
      <div class="experience-info education-info">
        <div class="experience-role education-role">
          {% if education.institution_url %}<a href="{{ education.institution_url }}" target="_blank" rel="noopener noreferrer">{{ education.institution }}</a>{% else %}{{ education.institution }}{% endif %} &middot;
          {% if education.school_url %}<a href="{{ education.school_url }}" target="_blank" rel="noopener noreferrer">{{ education.school }}</a>{% else %}{{ education.school }}{% endif %}
          &middot; {{ education.stage }}
        </div>
        <div class="experience-time education-time">{{ education.period }}</div>
        <div class="experience-mentor education-supervisor">Supervisor:
          {% for supervisor in education.supervisors %}
            {% if supervisor.url %}<a href="{{ supervisor.url }}" target="_blank" rel="noopener noreferrer">{{ supervisor.name }}</a>{% else %}{{ supervisor.name }}{% endif %}{% unless forloop.last %}, {% endunless %}
          {% endfor %}
        </div>
        {% if education.content != empty %}<div class="experience-description education-description">{{ education.content }}</div>{% endif %}
      </div>
    </div>
  {% endfor %}
</div>

## Experience

<div class="experience-grid">
  {% assign experience_items = site.experiences | sort: 'order' | reverse %}
  {% for experience in experience_items %}
    <div class="experience-card">
      <div class="experience-logo">
        {% if experience.logo contains "://" %}
          <img src="{{ experience.logo }}" alt="{{ experience.company | escape }} logo">
        {% else %}
          <img src="{{ experience.logo | relative_url }}" alt="{{ experience.company | escape }} logo">
        {% endif %}
      </div>
      <div class="experience-info">
        <div class="experience-role">
          {% if experience.company_url %}<a href="{{ experience.company_url }}" target="_blank" rel="noopener noreferrer">{{ experience.company }}</a>{% else %}{{ experience.company }}{% endif %}
          &middot; {{ experience.role }}
        </div>
        <div class="experience-time">{{ experience.period }}</div>
        <div class="experience-mentor">Mentor:
          {% if experience.mentors %}
            {% for mentor in experience.mentors %}
              {% if mentor.url %}<a href="{{ mentor.url }}" target="_blank" rel="noopener noreferrer">{{ mentor.name }}</a>{% else %}{{ mentor.name }}{% endif %}{% unless forloop.last %}, {% endunless %}
            {% endfor %}
          {% elsif experience.mentor_url %}
            <a href="{{ experience.mentor_url }}" target="_blank" rel="noopener noreferrer">{{ experience.mentor }}</a>
          {% else %}
            {{ experience.mentor }}
          {% endif %}
        </div>
        {% if experience.content != empty %}<div class="experience-description">{{ experience.content }}</div>{% endif %}
      </div>
    </div>
  {% endfor %}
</div>

## Honors & Rewards {#honors}

<div class="news-section honors-section">
{% assign honor_items = site.honors | sort: 'date' | reverse %}
{% for honor in honor_items %}
  <div class="news-item honor-item">
    <div class="news-item__body">
      <span class="news-date">{{ honor.date | date: "%Y.%m" }}</span>
      <span class="news-item__summary">{{ honor.summary | markdownify | remove: "<p>" | remove: "</p>" }}</span>
    </div>
  </div>
{% endfor %}
</div>

## Miscs
<div>
  <div class="news-item">🏊/🎾/🎧 are my vibe.</div>
  <div class="news-item">I'm leading a project curating code centric tutorials to deconstruct generative models. View <a href="https://howccc.github.io/StupidGen/">[here]</a>.</div>
  <div class="news-item">I have delivered some documents for Web3. <a href="{{ '/teaching/BlockChain_zh.pdf' | relative_url }}">[中文版]</a></div>
  <!-- <div class="news-item">I stand by <a href="https://en.wikipedia.org/wiki/Bitter_lesson">[The bitter lession]</a> by Rich Sutton, <a href="https://dl.acm.org/doi/10.1145/168304.168306">[Keeping the Neural Networks Simple]</a> by Geoffrey Hinton
 and <a href="https://udlbook.github.io/udlbook/">[Understanding Deep Learning]</a> by Simon J.D. Prince. Aligning with these insight and bruised by my own setbacks, I've developed a near allergic reaction to any HAND CRAFTED OPTIMIZATION, firmly gravitating toward the robust predictability of the Scaling Laws.</div> -->

</div>
