import { c as create_ssr_component, b as subscribe, e as escape, f as add_attribute, v as validate_component, o as onDestroy, g as add_styles } from './index2-982a00f7.js';
import { p as page } from './stores-8aeeb5cf.js';
import { A as APP_NAME } from './brand-66caae9f.js';

function getLocalProjectData() {
  {
    return {};
  }
}
function getOwnershipToken(projectId) {
  const localData = getLocalProjectData()[projectId];
  return localData ? localData.ownershipToken : null;
}
const css$1 = {
  code: ".container.svelte-1m6wziy.svelte-1m6wziy{margin:1em auto;display:flex;flex-direction:column;position:relative;height:100%}.container.svelte-1m6wziy>.svelte-1m6wziy{position:absolute;top:0;left:0;width:100%;height:100%}.loading.svelte-1m6wziy .sc-root{visibility:hidden}.sc-canvas{border-radius:0.5em;box-shadow:0 0 0 1px #aaa}@media(prefers-color-scheme: dark){.sc-canvas{box-shadow:0 0 0 1px #555}}.fullscreen.svelte-1m6wziy .sc-canvas{box-shadow:none;border-radius:0}.flag-screen{position:absolute;top:0;left:0;width:100%;height:100%;border:none;padding:0;margin:0;border-radius:0.5rem;display:flex;align-items:center;justify-content:center;text-align:center;background:rgba(0, 0, 0, 0.5);color:green;font-size:72px;cursor:pointer}.flag-icon{width:80px;height:80px;padding:16px;border-radius:100%;background:rgba(255, 255, 255, 0.75);border:3px solid hsla(0, 100%, 100%, 1);display:flex;justify-content:center;align-items:center;box-sizing:border-box}.loading-screen.svelte-1m6wziy.svelte-1m6wziy,.error-screen.svelte-1m6wziy.svelte-1m6wziy{display:flex;align-items:center;justify-content:center;text-align:center;background:black;color:white;flex-direction:column}.loading-bar-outer.svelte-1m6wziy.svelte-1m6wziy{width:200px;height:10px;position:relative;border:1px solid white}.loading-bar-inner.svelte-1m6wziy.svelte-1m6wziy{height:100%;width:0;background:white}.error-title.svelte-1m6wziy.svelte-1m6wziy{font-size:2em;margin:0}.error-details.svelte-1m6wziy.svelte-1m6wziy{font-family:monospace}.control-button{display:flex;align-items:center;justify-content:center;background:none;width:2rem;height:2rem;padding:0.375rem;border:none;border-radius:0.25rem;margin:0.5rem 0;user-select:none;-webkit-user-select:none;cursor:pointer;border:0;border-radius:4px}.control-button:hover{background:rgba(128, 0, 128, 0.2)}.control-button.active{background:rgba(128, 0, 128, 0.4)}.fullscreen-button{background:white !important;border:1px solid rgba(0, 0, 0, 0.15)}",
  map: null
};
let stageWidth = 480;
let stageHeight = 360;
const ProjectRunner = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { projectId } = $$props;
  let { md5extsToSha256 } = $$props;
  let { cloudHost } = $$props;
  let progress = 0;
  let scaffoldingElement;
  let containerElement;
  let { vm } = $$props;
  onDestroy(() => {
    if (vm) {
      vm.runtime.dispose();
      vm.stop();
    }
  });
  if ($$props.projectId === void 0 && $$bindings.projectId && projectId !== void 0)
    $$bindings.projectId(projectId);
  if ($$props.md5extsToSha256 === void 0 && $$bindings.md5extsToSha256 && md5extsToSha256 !== void 0)
    $$bindings.md5extsToSha256(md5extsToSha256);
  if ($$props.cloudHost === void 0 && $$bindings.cloudHost && cloudHost !== void 0)
    $$bindings.cloudHost(cloudHost);
  if ($$props.vm === void 0 && $$bindings.vm && vm !== void 0)
    $$bindings.vm(vm);
  $$result.css.add(css$1);
  return `<div class="${[
    "container svelte-1m6wziy",
    "loading "
  ].join(" ").trim()}"${add_styles({
    "width": `${stageWidth}px`,
    "height": `${stageHeight + 48}px`
  })}${add_attribute("this", containerElement, 0)}><div class="project-screen svelte-1m6wziy"${add_attribute("this", scaffoldingElement, 0)}></div>

  ${`<div class="loading-screen svelte-1m6wziy"><div class="loading-bar-outer svelte-1m6wziy"><div class="loading-bar-inner svelte-1m6wziy"${add_styles({ "width": `${progress * 100}%` })}></div></div></div>`}

  ${``}</div>`;
});
const css = {
  code: ".details.svelte-1l389tu.svelte-1l389tu{max-width:480px;margin:auto}.title.svelte-1l389tu.svelte-1l389tu{display:block;font:inherit;font-size:2em;background:none;padding:0;margin:1rem 0;border:none;width:100%;font-weight:bold;white-space:nowrap;overflow:hidden;text-overflow:ellipsis}.description.svelte-1l389tu.svelte-1l389tu{display:block;font:inherit;width:100%;max-width:100%;min-width:100%;min-height:100px;padding:0.5em;border-radius:0.5em;margin:1em 0;box-sizing:border-box;border:1px solid #b9d6ff;background-color:#dbebff}@media(prefers-color-scheme: dark){.description.svelte-1l389tu.svelte-1l389tu{border-color:#2063c1;background-color:#184677}}.report.svelte-1l389tu summary.svelte-1l389tu{cursor:pointer}.report.svelte-1l389tu textarea.svelte-1l389tu{width:100%;height:100px;box-sizing:border-box}",
  map: null
};
const DEFAULT_TITlE = "Untitled";
const DEFAULT_DESCRIPTION = "No description";
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $page, $$unsubscribe_page;
  $$unsubscribe_page = subscribe(page, (value) => $page = value);
  let { data } = $$props;
  const projectId = $page.params.project;
  const ownershipToken = data.adminOwnershipToken || getOwnershipToken(projectId);
  const canEditProject = !!ownershipToken;
  let projectTitle = data.metadata.title;
  let projectDescription = data.metadata.description;
  let vm;
  if ($$props.data === void 0 && $$bindings.data && data !== void 0)
    $$bindings.data(data);
  $$result.css.add(css);
  let $$settled;
  let $$rendered;
  do {
    $$settled = true;
    $$rendered = `${$$result.head += `<!-- HEAD_svelte-11b25jx_START -->${$$result.title = `<title>${escape(projectTitle || DEFAULT_TITlE)} - ${escape(APP_NAME)}</title>`, ""}<meta name="robots" content="noindex"><meta name="description"${add_attribute("content", projectDescription || DEFAULT_DESCRIPTION, 0)}><meta property="og:type" content="website"><meta property="og:title"${add_attribute("content", projectTitle || DEFAULT_TITlE, 0)}><meta property="og:description"${add_attribute("content", projectDescription || DEFAULT_DESCRIPTION, 0)}><!-- HEAD_svelte-11b25jx_END -->`, ""}



<div class="details svelte-1l389tu"><input class="title svelte-1l389tu"${add_attribute("value", data.metadata.title, 0)}${add_attribute("placeholder", DEFAULT_TITlE, 0)} autocomplete="off" ${!ownershipToken ? "readonly" : ""}></div>

${validate_component(ProjectRunner, "ProjectRunner").$$render(
      $$result,
      {
        projectId,
        md5extsToSha256: data.md5extsToSha256,
        cloudHost: "wss://cirrus.turbowarp.org",
        vm
      },
      {
        vm: ($$value) => {
          vm = $$value;
          $$settled = false;
        }
      },
      {}
    )}

<div class="details svelte-1l389tu"><textarea class="description svelte-1l389tu"${add_attribute("placeholder", DEFAULT_DESCRIPTION, 0)} autocomplete="off" ${!ownershipToken ? "readonly" : ""}>${escape(projectDescription, false)}</textarea>

  <p><button class="download">Download project</button></p>

  <details class="report svelte-1l389tu"><summary class="svelte-1l389tu">Report this project</summary>
    <p>All reports are reviewed by a real human volunteer. Help us review reports quickly by not wasting our time.
    </p>
    <p><textarea placeholder="Explain why this project should be removed. Please be comprehensive. We won't be able to reach out for more information." ${""} class="svelte-1l389tu">${escape("")}</textarea></p>
    <p><button class="submit-report" ${""}>Submit report</button></p></details>

  ${canEditProject ? `<div class="owner-section"><p><button>Delete this project</button></p></div>` : ``}</div>`;
  } while (!$$settled);
  $$unsubscribe_page();
  return $$rendered;
});

export { Page as default };
//# sourceMappingURL=_page.svelte-1037f819.js.map
