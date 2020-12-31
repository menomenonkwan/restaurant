function buildNav() {
  const nav = document.createElement('nav');
  const navMenu = document.createElement('ul');
  const navLinks = ['Home', 'Menu', 'Contact'];
  
  const buildNavLinks = navLinks.forEach(link => {
    const item  = document.createElement('li');
    item.textContent = `${link}`;
    if (link === 'Home') {
      item.classList.add('active');
    }
    navMenu.appendChild(item);
  });
  nav.appendChild(navMenu);
  return nav;
}

export default buildNav;