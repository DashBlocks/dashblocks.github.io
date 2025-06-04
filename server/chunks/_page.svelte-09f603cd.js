import { c as create_ssr_component, e as escape, d as each } from './index2-982a00f7.js';

const css = {
  code: "textarea.svelte-1a8rv4m{width:500px;height:100px;box-sizing:border-box}.dismissed.svelte-1a8rv4m{text-decoration:line-through;opacity:0.5}",
  map: null
};
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { data } = $$props;
  const reports = data.reports;
  let dismissedReports = [];
  if ($$props.data === void 0 && $$bindings.data && data !== void 0)
    $$bindings.data(data);
  $$result.css.add(css);
  return `<p>There are ${escape(reports.length)} report(s).</p>

${each(reports, (report) => {
    return `<div class="${[
      "report svelte-1a8rv4m",
      dismissedReports.includes(report.reportId) ? "dismissed" : ""
    ].join(" ").trim()}"><h2><a href="${"/projects/" + escape(report.projectId, true)}">${escape(report.projectTitle)}</a> ${escape(report.reportId)}</h2>
    <p>Project description:</p>
    <textarea readonly autocomplete="off" class="svelte-1a8rv4m">${escape(report.projectDescription, false)}</textarea>
    <p>Report description:</p>
    <textarea readonly autocomplete="off" class="svelte-1a8rv4m">${escape(report.reportBody, false)}</textarea>
    <p><button>Dismiss report</button></p>
  </div>`;
  })}`;
});

export { Page as default };
//# sourceMappingURL=_page.svelte-09f603cd.js.map
