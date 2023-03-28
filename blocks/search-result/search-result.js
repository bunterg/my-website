import { subscribe, unsubscribe } from '../../scripts/app-state.js';

class LayoutManager {
  constructor(container) {
    this.container = container;
    this.fragment = document.createDocumentFragment();
  }

  update(state) {
    this.container.innerHTML = state.query;
  }
}

export default async function decorate(block) {
  const layoutManager = new LayoutManager(block);
  const container = document.createElement('div');
  container.id = 'search-result'
  container.innerHTML = 'loading';
  const handleUpdate = (state) => {
    layoutManager.update(state);
  }
  subscribe(handleUpdate);
  block.innerHTML = '';
  block.append(container);
}
