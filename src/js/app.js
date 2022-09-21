import Popup from './Popup';
import popupObject from './popupObject';

const body = document.querySelector('body');
const popup = new Popup(popupObject.login).init();
body.append(popup);
