import buildNav from './nav';

function buildLogo() {  
  const logo = document.createElement('p');
  logo.id = 'logo';
  logo.innerHTML = '<span class="the">The</span><span class="center">Random Eatery</span> Bistro';
  return logo;
}

function buildHeader() {
  const header = document.createElement('header');
  const text = buildLogo();
  header.appendChild(text);
  header.appendChild(buildNav());
  return header;
}

export default buildHeader;