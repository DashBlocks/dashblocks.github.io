import { c as create_ssr_component, e as escape } from './index2-982a00f7.js';
import { A as APP_NAME } from './brand-66caae9f.js';

const css = {
  code: "body{margin:0}:root{font-family:'Helvetica Neue', Helvetica, Arial, sans-serif;color-scheme:light dark}@media(prefers-color-scheme: dark){:root{background:#111;color:#eee}}.title.svelte-1bkamte.svelte-1bkamte{color:rgb(210, 0, 210);font-weight:bold}footer.svelte-1bkamte.svelte-1bkamte{margin:16px 0;color:#555;display:flex;align-items:center;flex-direction:column;text-align:center}@media(prefers-color-scheme: dark){footer.svelte-1bkamte.svelte-1bkamte{color:#aaa}}footer.svelte-1bkamte>.svelte-1bkamte{margin:10px 0}footer.svelte-1bkamte a.svelte-1bkamte{color:inherit;text-decoration:none}footer.svelte-1bkamte a.svelte-1bkamte:hover{text-decoration:underline}.links.svelte-1bkamte.svelte-1bkamte{display:flex}.link-gap.svelte-1bkamte.svelte-1bkamte{width:16px}",
  map: null
};
const Layout = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  $$result.css.add(css);
  return `${$$result.head += `<!-- HEAD_svelte-bhu8j4_START --><meta name="viewport" content="width=device-width, initial-scale=1"><!-- HEAD_svelte-bhu8j4_END -->`, ""}



${slots.default ? slots.default({}) : ``}

<footer class="svelte-1bkamte"><div class="disclaimer svelte-1bkamte"><span class="title svelte-1bkamte">${escape(APP_NAME)}</span> is not affiliated with Scratch, the Scratch Team, or the Scratch Foundation.
  </div>

  <div class="links svelte-1bkamte"><a href="/" class="svelte-1bkamte">Home</a>
    <div class="link-gap svelte-1bkamte"></div>
    <a href="https://github.com/sponsors/GarboMuffin" class="svelte-1bkamte">Donate</a>
    <div class="link-gap svelte-1bkamte"></div>
    <a href="https://github.com/GarboMuffin/placeholder" class="svelte-1bkamte">GitHub</a>
    <div class="link-gap svelte-1bkamte"></div>
    <a href="/privacy" class="svelte-1bkamte">Privacy</a>
    <div class="link-gap svelte-1bkamte"></div>
    <a href="/contact" class="svelte-1bkamte">Contact &amp; DMCA</a></div></footer>`;
});

export { Layout as default };
//# sourceMappingURL=_layout.svelte-1c94f5eb.js.map
