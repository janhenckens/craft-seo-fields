import{_ as e,c as t,o as a,V as s}from"./chunks/framework.sSymVGL-.js";const k=JSON.parse('{"title":"Plugin settings - SEO Fields","description":"hello","frontmatter":{"title":"Plugin settings - SEO Fields","prev":false,"next":false,"head":[["meta",{"name":"description","content":"hello"}],["meta",{"name":"keywords","content":"super duper SEO"}]]},"headers":[],"relativePath":"settings.md","filePath":"settings.md"}'),i={name:"settings.md"},o=s(`<h1 id="plugin-settings" tabindex="-1">Plugin settings <a class="header-anchor" href="#plugin-settings" aria-label="Permalink to &quot;Plugin settings&quot;">​</a></h1><p>The following options can be set by copying <a href="https://github.com/studioespresso/craft-seo-fields/blob/develop/src/config.php" target="_blank" rel="noreferrer">this file</a> to your project&#39;s <code>config</code> directory, and renaming it to <code>seo-fields.php</code>.</p><h2 id="pluginlabel" tabindex="-1">pluginLabel <a class="header-anchor" href="#pluginlabel" aria-label="Permalink to &quot;pluginLabel&quot;">​</a></h2><p>How the plugin is labelled in the CP&#39;s sidebar, defaults to <code>SEO</code></p><h2 id="titleseperator" tabindex="-1">titleSeperator <a class="header-anchor" href="#titleseperator" aria-label="Permalink to &quot;titleSeperator&quot;">​</a></h2><p>Defaults to <code>-</code></p><h2 id="robotspersite" tabindex="-1">robotsPerSite <a class="header-anchor" href="#robotspersite" aria-label="Permalink to &quot;robotsPerSite&quot;">​</a></h2><p>Whether robots.txt should be set per site, defautls to <code>false</code></p><h2 id="sitemappersite" tabindex="-1">sitemapPerSite <a class="header-anchor" href="#sitemappersite" aria-label="Permalink to &quot;sitemapPerSite&quot;">​</a></h2><p>Whether sitemap settings should be set per site, defautls to <code>false</code></p><h2 id="fieldhandle" tabindex="-1">fieldHandle <a class="header-anchor" href="#fieldhandle" aria-label="Permalink to &quot;fieldHandle&quot;">​</a></h2><p>This is the handle your SEO Fields - field has, defaults to <code>seo</code> but make sure to change this setting should your field be named differently.</p><h2 id="notfoundlimit" tabindex="-1">notFoundLimit <a class="header-anchor" href="#notfoundlimit" aria-label="Permalink to &quot;notFoundLimit&quot;">​</a></h2><p>The maximum number of &quot;not found&quot; or 404 items to track, defaults to 10000.</p><h2 id="schemaoptions" tabindex="-1">schemaOptions <a class="header-anchor" href="#schemaoptions" aria-label="Permalink to &quot;schemaOptions&quot;">​</a></h2><p>Additional options to be listed in the Schema options per section. This take an array of :</p><ul><li>the class of the Schema object (base on <a href="https://github.com/spatie/schema-org" target="_blank" rel="noreferrer">spatie/schema-org</a>)</li><li>the label you want it be listed as</li></ul><p>For example:</p><div class="language-php vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">php</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">    &quot;schemaOptions&quot;</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> =&gt;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> [</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">        get_class</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">\\Spatie\\SchemaOrg\\Schema</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">::</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">recipe</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">()) </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=&gt;</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> &#39;Recipe&#39;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    ],</span></span></code></pre></div>`,19),l=[o];function n(r,h,p,d,c,u){return a(),t("div",null,l)}const m=e(i,[["render",n]]);export{k as __pageData,m as default};