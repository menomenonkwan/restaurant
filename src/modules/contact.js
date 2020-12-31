import { location, phone, social, hours } from './content';

function buildDiv(divClass) {
  const div = document.createElement('div');
  div.classList.add(divClass);

  return div;
}

function buildHeading(heading) {
  const h3 = document.createElement('h3');
  h3.textContent = heading;

  return h3;  
}

function buildInfo(heading, options) {
  const div = buildDiv('wrapper');
  div.appendChild(buildHeading(heading));
  
  if(options === social) {
    const socialDiv = buildDiv('social');
    options.forEach(option => {
      const p = document.createElement('p');
      p.innerHTML = option;
      socialDiv.appendChild(p);
    });
    div.appendChild(socialDiv);
    return div;
  }

  if(Array.isArray(options)) {
    options.forEach(option => {
      const p = document.createElement('p');
      p.innerHTML = option;
      div.insertAdjacentElement('beforeend', p);
    });
    return div;
  }

  const p = document.createElement('p');
  p.textContent = options;
  div.appendChild(p);  

  return div;
}

function buildContact() {
  const contact = document.createElement('div');
  contact.id = 'contact';

  const contactInfo = buildDiv('address');
  contactInfo.appendChild(buildInfo('Address:', location));
  contactInfo.appendChild(buildInfo('Reservations:', phone));
  contactInfo.appendChild(buildInfo('Follow Us:', social));
  
  const hoursInfo = buildDiv('info');
  hoursInfo.appendChild(buildInfo('Hours:', hours));

  contact.appendChild(contactInfo);
  contact.appendChild(hoursInfo);
  return contact;
}

export default buildContact;