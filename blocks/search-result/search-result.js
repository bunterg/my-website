// import { decorateIcons } from '../../scripts/lib-franklin.js';

export default async function decorate(block) {
  block.innerHTML = '';
  const resp = await fetch('https://my-json-server.typicode.com/bunterg/my-website/results', {});
  const data = await resp.json();

  const container = document.createElement('div');
  data.forEach((element) => {
    const node = document.createElement('div');
    node.id = element.id;
    node.textContent = element.title;
    container.append(node);
  });
  block.append(container);
}
