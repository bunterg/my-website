import { subscribe, unsubscribe } from '../../scripts/app-state';

class LayoutManager {
  constructor(container) {
    this.container = container;
    this.fragment = document.createDocumentFragment();
  }

  update(state) {
    this.container.innerHTML = `IDK ${Math.random()}` 
  }
}

export default async function decorate(block) {
  const layoutManager = new LayoutManager(block);
  const container = document.createElement('div');
  container.id = 'search-result'
  const handleUpdate = () => {
    layoutManager.update();
  }
  subscribe(update);
  block.innerHTML = 'Default response';
  block.append(container);
}
