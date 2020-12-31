import { text } from './content';

function buildHome() {
  const home = document.createElement('div');
  home.id = 'home';
  const description = document.createElement('p');
  const title = document.createElement('span');
  const yelpRev = document.createElement('p');
  const review = document.createElement('p');

  title.classList.add('title');
  title.textContent = 'The Random Eatery Bistro,';
  description.textContent = text;
  description.prepend(title);
  yelpRev.innerHTML = `Check out our yelp reviews: <a href="#">Yelp <i class="fab fa-yelp"></i></a>`;
  review.innerHTML = `Read our review in the local newspaper: <a href="#">The Eaters Digest<span> <i class="fas fa-utensils"></i></span></a>`;

  home.appendChild(description);
  home.appendChild(yelpRev);
  home.appendChild(review);
  
  return home;
}

export default buildHome;