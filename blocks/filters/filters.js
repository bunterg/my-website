import { readBlockConfig, decorateIcons } from '../../scripts/lib-franklin.js';
import { h, render } from '../../scripts/preact.js';
import htm from '../../scripts/htm.js';

// Initialize htm with Preact
const html = htm.bind(h);

function App (props) {
  return html`<h1>Hello ${props.name}!</h1>`;
}


/**
 * loads and decorates the footer
 * @param {Element} block The header block element
 */

export default async function decorate(block) {
  block.textContent = '';
  const cfg = readBlockConfig(block);
  const emptyState = cfg.empty;
  console.log(block);
  console.log(emptyState)
  const filter = html`
    <div>
      <h3>code Filter</h3>
    </div>
  `;

  render(filter, block);


//   block.textContent = '';

//   const footerPath = cfg.footer || '/footer';
//   const resp = await fetch(`${footerPath}.plain.html`, window.location.pathname.endsWith('/footer') ? { cache: 'reload' } : {});
//   const html = await resp.text();
//   const footer = document.createElement('div');
//   footer.innerHTML = html;
//   await decorateIcons(footer);
//   block.append(footer);
}
