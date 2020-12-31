import {items} from './content';

function buildMenu() {
  const grid = document.createElement('div');
  grid.id = 'menu-grid';

  const gridHTML = items.map(item => `
    <div class="menu-item">
      <img src="${item.src}" alt="${item.alt}" />
      <h3>${item.name} - <span class="price">$${item.price}</span></h3>
      <p>${item.desc}</p>
    </div>`
  ).join('');
  grid.innerHTML = gridHTML;

  return grid;
}

export default buildMenu;