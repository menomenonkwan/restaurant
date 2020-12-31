import buildHeader from './modules/header';
import buildFooter from './modules/footer';
import buildHome from './modules/home';
import buildMenu from './modules/menu';
import buildContact from './modules/contact';

const content = document.querySelector('div#content');
const main = document.createElement('main');
main.appendChild(buildHome());
// let pageContent = buildHome();

function buildPage() {

  content.appendChild(buildHeader());
  // content.appendChild(pageContent);
  content.appendChild(main);
  // content.appendChild(buildHome());
  // content.appendChild(buildMenu());
  // content.appendChild(buildContact());
  content.appendChild(buildFooter());
}   

buildPage();

function changePage(selection) {
  if(selection === 'Home') {
    main.textContent = '';
    main.appendChild(buildHome());
  } else if(selection === 'Menu') {
    main.textContent = '';
    main.appendChild(buildMenu());
  } else if(selection === 'Contact') {
    main.textContent = '';
    main.appendChild(buildContact());
  } else {
    return;
  }
}

function handleClick(e) {
  const btn = e.target;
  if(btn.classList.contains('active')) {
    return;
  } else {
    pages.forEach(page => page.classList.remove('active'));
    btn.classList.add('active');
    changePage(btn.textContent);
  }
}

const pages = document.querySelectorAll('li');
pages.forEach(page => page.addEventListener('click', handleClick));