import { footerContent } from './content';

function buildFooter() {
  const footer = document.createElement('footer');
  footer.innerHTML = footerContent;
  return footer;
}

export default buildFooter;