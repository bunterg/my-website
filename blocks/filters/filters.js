import { readBlockConfig, decorateIcons } from '../../scripts/lib-franklin.js';

export default async function decorate(block) {
  const cfg = readBlockConfig(block);
  block.textContent = '';

  const footerPath = cfg.empty || '/filter';
  const resp = await fetch(`${footerPath}.plain.html`, window.location.pathname.endsWith('/filter') ? { cache: 'reload' } : {});
  const html = await resp.text();
  const footer = document.createElement('div');
  footer.innerHTML = html;
  await decorateIcons(footer);
  block.append(footer);
}
