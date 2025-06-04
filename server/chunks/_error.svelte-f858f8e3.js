import { c as create_ssr_component, b as subscribe, e as escape } from './index2-982a00f7.js';
import { p as page } from './stores-8aeeb5cf.js';

const css = {
  code: "main.svelte-1kgv4oe{max-width:480px;margin:auto}",
  map: null
};
const Error = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $page, $$unsubscribe_page;
  $$unsubscribe_page = subscribe(page, (value) => $page = value);
  const error = $page.error;
  $$result.css.add(css);
  $$unsubscribe_page();
  return `<main class="svelte-1kgv4oe"><h1>Error ${escape($page.status)}</h1>
  <p>${escape(error.message)}</p></main>`;
});

export { Error as default };
//# sourceMappingURL=_error.svelte-f858f8e3.js.map
