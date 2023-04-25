import * as adapter from '@astrojs/netlify/netlify-functions.js';
import { i as server_default, j as deserializeManifest } from './chunks/astro.7fc23844.mjs';
import { _ as _page0, l as _page2, m as _page3, n as _page5 } from './chunks/pages/all.250ce73b.mjs';
import { _ as _page1, a as _page4 } from './chunks/prerender.2a121d40.mjs';
import 'mime';
import 'cookie';
import 'kleur/colors';
import 'slash';
import 'path-to-regexp';
import 'html-escaper';
import 'string-width';
import 'image-size';
import 'node:fs/promises';
import 'node:url';
/* empty css                                     */import '@astrojs/rss';
import 'svgo';
import 'node:path';
import 'http-cache-semantics';
import 'node:os';
import 'magic-string';
import 'node:stream';

function check(Component) {
	return Component['render'] && Component['$$render'];
}

async function renderToStaticMarkup(Component, props, slotted) {
	const slots = {};
	for (const [key, value] of Object.entries(slotted)) {
		slots[key] = () =>
			`<astro-slot${key === 'default' ? '' : ` name="${key}"`}>${value}</astro-slot>`;
	}
	const { html } = Component.render(props, { $$slots: slots });
	return { html };
}

const _renderer1 = {
	check,
	renderToStaticMarkup,
};

const pageMap = new Map([["node_modules/@astrojs/image/dist/endpoint.js", _page0],["src/pages/index.astro", _page1],["src/pages/rss.xml.js", _page2],["src/pages/blog/index.astro", _page3],["src/pages/blog/[...slug].astro", _page4],["src/pages/api/newsletter/subscribe.ts", _page5],]);
const renderers = [Object.assign({"name":"astro:jsx","serverEntrypoint":"astro/jsx/server.js","jsxImportSource":"astro"}, { ssr: server_default }),Object.assign({"name":"@astrojs/svelte","clientEntrypoint":"@astrojs/svelte/client.js","serverEntrypoint":"@astrojs/svelte/server.js"}, { ssr: _renderer1 }),];

const _manifest = Object.assign(deserializeManifest({"adapterName":"@astrojs/netlify/functions","routes":[{"file":"index.html","links":[],"scripts":[],"routeData":{"route":"/","type":"page","pattern":"^\\/$","segments":[],"params":[],"component":"src/pages/index.astro","pathname":"/","prerender":true,"_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[],"routeData":{"type":"endpoint","route":"/_image","pattern":"^\\/_image$","segments":[[{"content":"_image","dynamic":false,"spread":false}]],"params":[],"component":"node_modules/@astrojs/image/dist/endpoint.js","pathname":"/_image","prerender":false,"_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[],"routeData":{"route":"/rss.xml","type":"endpoint","pattern":"^\\/rss\\.xml$","segments":[[{"content":"rss.xml","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/rss.xml.js","pathname":"/rss.xml","prerender":false,"_meta":{"trailingSlash":"ignore"}}},{"file":"","links":["/_astro/_...slug_.c5609da5.css"],"scripts":[{"type":"inline","value":"const t=document.getElementById(\"hamburger\"),e=document.getElementById(\"menu\"),d=document.getElementById(\"close\");e&&(e.addEventListener(\"click\",()=>{e.classList.add(\"hidden\")}),t&&t.addEventListener(\"click\",()=>{e.classList.remove(\"hidden\"),console.log(\"Close it\"),d.focus()}),d&&e&&d.addEventListener(\"click\",()=>{e.classList.add(\"hidden\")}));\n"}],"routeData":{"route":"/blog","type":"page","pattern":"^\\/blog\\/?$","segments":[[{"content":"blog","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/blog/index.astro","pathname":"/blog","prerender":false,"_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[],"routeData":{"route":"/api/newsletter/subscribe","type":"endpoint","pattern":"^\\/api\\/newsletter\\/subscribe$","segments":[[{"content":"api","dynamic":false,"spread":false}],[{"content":"newsletter","dynamic":false,"spread":false}],[{"content":"subscribe","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/api/newsletter/subscribe.ts","pathname":"/api/newsletter/subscribe","prerender":false,"_meta":{"trailingSlash":"ignore"}}}],"site":"https://astrocourse.dev","base":"/","markdown":{"drafts":false,"syntaxHighlight":"shiki","shikiConfig":{"langs":[],"theme":"github-dark","wrap":false},"remarkPlugins":[],"rehypePlugins":[],"remarkRehype":{},"gfm":true,"smartypants":true},"pageMap":null,"componentMetadata":[["\u0000astro:content",{"propagation":"in-tree","containsHead":false}],["/Users/jamesquick/astro-course.dev/src/pages/blog/[...slug].astro",{"propagation":"in-tree","containsHead":true}],["\u0000@astrojs-pages-virtual-entry",{"propagation":"in-tree","containsHead":false}],["\u0000@astrojs-ssr-virtual-entry",{"propagation":"in-tree","containsHead":false}],["/Users/jamesquick/astro-course.dev/src/pages/blog/index.astro",{"propagation":"in-tree","containsHead":true}],["/Users/jamesquick/astro-course.dev/src/pages/rss.xml.js",{"propagation":"in-tree","containsHead":false}],["/Users/jamesquick/astro-course.dev/src/pages/index.astro",{"propagation":"none","containsHead":true}]],"renderers":[],"entryModules":{"\u0000@astrojs-ssr-virtual-entry":"_@astrojs-ssr-virtual-entry.mjs","/Users/jamesquick/astro-course.dev/node_modules/@astrojs/image/dist/vendor/squoosh/image-pool.js":"chunks/image-pool.631f5aa0.mjs","/astro/hoisted.js?q=0":"_astro/hoisted.03056317.js","@astrojs/svelte/client.js":"_astro/client.c4e17359.js","/Users/jamesquick/astro-course.dev/src/components/Newsletter.svelte":"_astro/Newsletter.3d13eefd.js","astro:scripts/before-hydration.js":""},"assets":["/_astro/selfie.b9407931.jpeg","/_astro/_...slug_.c5609da5.css","/Astro-Logo.svg","/Circuit-Pattern-Gray.svg","/Circuit-Pattern-Navy.svg","/Circuit-Pattern-White.svg","/Cross-Gradient-Pattern.svg","/Envelope-Pattern.svg","/Gradient-Cross-Pattern.svg","/Gradient-Pattern-Hatch.svg","/Grid-Pattern.svg","/Key-Takeaways.svg","/Navy-Circuit-Pattern.svg","/Purple-Tech-Pattern.svg","/Squiggle-Dark.svg","/Squiggle-Pattern.svg","/Squiggle.svg","/X-Pattern-Blue.svg","/cover.jpg","/favicon.svg","/_astro/Newsletter.3d13eefd.js","/_astro/client.c4e17359.js","/index.html"]}), {
	pageMap: pageMap,
	renderers: renderers
});
const _args = {};
const _exports = adapter.createExports(_manifest, _args);
const handler = _exports['handler'];

const _start = 'start';
if(_start in adapter) {
	adapter[_start](_manifest, _args);
}

export { handler, pageMap, renderers };
