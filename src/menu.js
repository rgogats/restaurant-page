const menuTab = () => {

    const content = document.querySelector('div#content');
    const menu = 'Winter 2024 seasonal menu coming soon';

    const headerImage = document.createElement('img');
    headerImage.src = './header-image.jpeg';
    headerImage.alt = 'Menu';
    const contentBody = document.createElement('div');
    contentBody.className = 'menu';
    contentBody.textContent = menu;
    
    while (content.lastChild) {
        content.removeChild(content.lastChild);
    }
    
    content.appendChild(headerImage);
    content.appendChild(contentBody);
};

export default menuTab;