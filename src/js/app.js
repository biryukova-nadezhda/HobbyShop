import Popup from './Popup';
import popupObject from './popupObject';

const buttonLogin = document.querySelector('.header-interaction__item');
buttonLogin.addEventListener('click', () => {
  const body = document.querySelector('body');
  const popup = new Popup(popupObject.login).init();
  body.prepend(popup);
});
