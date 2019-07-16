---
layout: page
title: "About me, Nicolas Genty, experienced web-designer learning front-end development"
permalink: /about/
icon: icon-icon_id-badge
lang: en
---

<div id="about" class="innerspace flex-column">
    <article class="flex_column">
        <div class="thumbnail">
            <img src="{{site.baseurl}}/assets/img/me_thumbnail.jpg" alt="me, myself and I">
        </div>
        <h2>{{site.author.name}}<br>
        <span>{{site.author.job_title}}</span>
        </h2>
        <p>{{site.author.description}}</p>  
        <p>Web-designer by formation I have always tried to master all the processes of website creation. That's why I've always tried to train myself in all the areas required from mockup to development.
        Today, I'm learning front-end development in order to become a "full-stack designer".  
        </p>
        <a href="{{site.baseurl}}/assets/" class="button centered launcher icon-file-pdf" target="_blank">Download my resume (pdf)</a>
    </article>
    <aside class="flex-column">
        <h3>Technical Skills</h3>
        <div>
            <h3 class="icon-icon_computer">Base</h3>
            <ul itemprop="keywords" class="tags_list">
                <li class="icon-system_windows">Windows</li>
                <li class="icon-system_apple">macOs</li>
                <li class="icon-icon_terminal">Linux (cli)</li>
            </ul>
            <p>also, vm, containers (docker) and passionate about hardware & network…</p>
        </div>
        <hr>
        <div>
            <h3 class="icon-icon_layers">Apps</h3>
            <ul itemprop="keywords" class="tags_list">
                <li class="icon-design_adobe">Adobe suite</li>
                <li class="icon-design_adobeillustrator">Adobe Illustrator</li>
                <li class="icon-design_adobephotoshop">Adobe Photoshop</li>
                <li class=" icon-diamond">Sketch</li>
            </ul>
            <p>also, Affinity Designer, Photo, Omnigraffle, and many more…</p>
        </div>
        <hr>
        <div>
            <h3 class="icon-icon_code">Development</h3>
            <ul itemprop="keywords" class="tags_list">
                <li class="">Javascript</li>
                <li class="">HTML, Markdown</li>
                <li class="">CSS, SASS, LESS*</li>
                <li class="">Wordpress, Jekyll, Gatsby*</li>
                <li class="">Angular*, React*</li>
            </ul>
            <p>* scholar knownledge</p>
            <p>also, multiple libraries…</p>
        </div>
    </aside>
</div>
{% comment %}
{% include contact.html %}
{% endcomment %}