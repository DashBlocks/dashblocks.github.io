import { c as create_ssr_component, e as escape, v as validate_component } from './index2-982a00f7.js';
import { A as APP_NAME } from './brand-66caae9f.js';

const css$1 = {
  code: '.outer.svelte-1huklq{position:relative;padding:1em 0;width:100%;height:100px;box-sizing:border-box;color:#555;border:0.25em dashed currentColor;border-radius:0.5em;display:flex;align-items:center;justify-content:center;flex-direction:column;text-align:center}@media(prefers-color-scheme: dark){.outer.svelte-1huklq{color:#aaa}}.dropping.svelte-1huklq{color:#55a}.outer.svelte-1huklq:focus-within{outline:2px solid #55a}.uploading.svelte-1huklq{cursor:auto}.label.svelte-1huklq{font-size:1.25em;margin-bottom:8px}input[type="file"].svelte-1huklq{position:absolute;top:0;left:0;width:100%;height:100%;opacity:0;cursor:pointer}.uploaded-project.svelte-1huklq{color:black;margin:1em 0;padding:0.5em;background:rgb(113, 255, 113);border:1px solid rgb(46, 216, 46);border-radius:0.5em}a.svelte-1huklq{color:blue}a.svelte-1huklq:active{color:red}.progress-outer.svelte-1huklq{width:200px;height:8px;border:1px solid black;background-color:black}.progress-inner.svelte-1huklq{width:0;height:100%;background-color:white}@media(prefers-color-scheme: dark){.progress-outer.svelte-1huklq{border-color:white}}',
  map: null
};
const ProjectInput = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  $$result.css.add(css$1);
  return `



<label class="${[
    "outer svelte-1huklq",
    " "
  ].join(" ").trim()}"><input type="file" accept=".sb3" autocomplete="off" ${""} ${""} class="svelte-1huklq">

  ${`<div class="label svelte-1huklq">Select or drop .sb3 file</div>`}</label>

${``}`;
});
const css = {
  code: "section.svelte-7c7fbm.svelte-7c7fbm{max-width:600px;margin:auto}h1.svelte-7c7fbm.svelte-7c7fbm,h2.svelte-7c7fbm.svelte-7c7fbm,p.svelte-7c7fbm.svelte-7c7fbm,section.svelte-7c7fbm.svelte-7c7fbm{margin-top:16px;margin-bottom:16px}.header.svelte-7c7fbm.svelte-7c7fbm{text-align:center}h1.svelte-7c7fbm.svelte-7c7fbm{font-size:3em;font-weight:normal}.fancy.svelte-7c7fbm.svelte-7c7fbm{font-weight:bold;-webkit-text-fill-color:transparent;-webkit-background-clip:text;background-clip:text;background-image:linear-gradient(to right, #a31aff, #e44cff)}.questions.svelte-7c7fbm h2.svelte-7c7fbm{font-weight:normal}.warning.svelte-7c7fbm.svelte-7c7fbm{padding:0.5em;margin:0.5em 0;border-radius:0.5em;background:rgba(255, 0, 0, 0.245);border:1px solid rgba(255, 0, 0, 0.604)}",
  map: null
};
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  $$result.css.add(css);
  return `${$$result.head += `<!-- HEAD_svelte-520ac2_START -->${$$result.title = `<title>${escape(APP_NAME)}</title>`, ""}<!-- HEAD_svelte-520ac2_END -->`, ""}



<section class="header svelte-7c7fbm"><h1 class="svelte-7c7fbm">Welcome to <span class="fancy svelte-7c7fbm">${escape(APP_NAME)}.</span></h1>
  <p class="svelte-7c7fbm">Upload a .sb3 file and we&#39;ll generate a secure random link that <i>anyone</i> can use to view the project.</p>
  <p class="warning svelte-7c7fbm">This is an experiment. Projects may be deleted randomly. Please <a href="https://github.com/GarboMuffin/placeholder/issues/new">report bugs</a>.</p></section>

<section class="file svelte-7c7fbm">${validate_component(ProjectInput, "ProjectInput").$$render($$result, {}, {}, {})}</section>

<section class="questions svelte-7c7fbm"><h2 class="svelte-7c7fbm">How do I get the .sb3 file to upload?</h2>
  <p class="svelte-7c7fbm">Go to Scratch &gt; Go to My Stuff &gt; Open your project &gt; See inside &gt; Open the &quot;File&quot; in the top left corner &gt; Press &quot;Save to your computer&quot; &gt; Upload the downloaded file to this site.</p>

  <h2 class="svelte-7c7fbm">What projects am I allowed to upload?</h2>
  <p class="svelte-7c7fbm">If you follow the <a href="https://scratch.mit.edu/community_guidelines">Scratch community guidelines</a>, then you have nothing to worry about. We will emphasize a few points (noncomprehensive):</p>
  <ul><li>No hate speech.</li>
    <li>No spreading personal information.</li>
    <li>Nothing that is illegal in the United States of America.</li></ul>

  <h2 class="svelte-7c7fbm">How long do the links work for?</h2>
  <p class="svelte-7c7fbm">During the experiment period, projects may be removed at random. We aren&#39;t going out of our way to delete projects, but when we have to make significant database changes, we probably won&#39;t write migration code.</p>
  <p class="svelte-7c7fbm">In the future, we intend to make the links work for as long as reasonably possible. We&#39;re not sure what exactly that means right now.</p>

  <h2 class="svelte-7c7fbm">Can I edit or delete the project?</h2>
  <p class="svelte-7c7fbm">The uploader of a project can delete it. Editing the project after uploading may be added later.</p>

  <h2 class="svelte-7c7fbm">How do I sign in?</h2>
  <p class="svelte-7c7fbm">There are no accounts. You can only upload projects. We store a secret token in your browser&#39;s local storage when you upload a project instead of using accounts.</p>

  <h2 class="svelte-7c7fbm">How large can projects be?</h2>
  <p class="svelte-7c7fbm">Similar limits to Scratch. The limits will be adjusted over time.</p>

  <h2 class="svelte-7c7fbm">Do cloud variables work?</h2>
  <p class="svelte-7c7fbm">Yes.</p>

  <h2 class="svelte-7c7fbm">Do custom extensions work?</h2>
  <p class="svelte-7c7fbm">Most extensions on <a href="https://extensions.turbowarp.org/">extensions.turbowarp.org</a> will work.</p>

  <h2 class="svelte-7c7fbm">Notable missing features that will be added eventually</h2>
  <ul><li>Built-in editor</li>
    <li>Addons</li>
    <li>Editing uploaded projects</li></ul>

  <h2 class="svelte-7c7fbm">Where is the source code?</h2>
  <p class="svelte-7c7fbm"><a href="https://github.com/GarboMuffin/placeholder/">https://github.com/GarboMuffin/placeholder/</a></p></section>`;
});

export { Page as default };
//# sourceMappingURL=_page.svelte-a3b088f5.js.map
