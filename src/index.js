import homeTab from './home.js';
import menuTab from './menu.js';
import contactTab from './contact.js';

(() => {
    const homeItem = document.querySelector('li#home');
    const menuItem = document.querySelector('li#menu');
    const contactItem = document.querySelector('li#contact');
    console.log('homeItem', homeItem);

    homeItem.addEventListener('click', homeTab);
    menuItem.addEventListener('click', menuTab);
    contactItem.addEventListener('click', contactTab);
})();