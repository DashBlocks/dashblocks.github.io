import { c as create_ssr_component, e as escape } from './index2-982a00f7.js';
import { C as CONTACT } from './brand-66caae9f.js';

const css = {
  code: "main.svelte-1kgv4oe{max-width:480px;margin:auto}",
  map: null
};
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  $$result.css.add(css);
  return `${$$result.head += `<!-- HEAD_svelte-bonrbl_START -->${$$result.title = `<title>Contact Us</title>`, ""}<!-- HEAD_svelte-bonrbl_END -->`, ""}



<main class="svelte-1kgv4oe"><h1>Contact Us</h1>
  <p>Email us: ${escape(CONTACT)}</p>
  <p>For DMCA requests, please include links to the relevant project(s).</p></main>`;
});

export { Page as default };
//# sourceMappingURL=_page.svelte-d76f686e.js.map
