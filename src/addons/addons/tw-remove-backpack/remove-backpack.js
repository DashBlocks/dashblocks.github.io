export default async function ({ addon }) {
  const resize = () => window.dispatchEvent(new Event("resize"));
  addon.self.addEventListener('disabled', resize);
  addon.self.addEventListener('reenabled', resize);
  resize();
}
