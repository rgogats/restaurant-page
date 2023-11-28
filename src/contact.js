const contactTab = () => {

    const content = document.querySelector('div#content');
    const contactInfo = `For any questions, comments, or concerns call (607) 625-2834`;

    const headerImage = document.createElement('img');
    headerImage.src = './header-image.jpeg';
    headerImage.alt = 'Contact';
    const contentBody = document.createElement('div');
    contentBody.className = 'contact';
    contentBody.textContent = contactInfo;

    console.log(content);

    while (content.lastChild) {
        content.removeChild(content.lastChild);
    }
    
    content.appendChild(headerImage);
    content.appendChild(contentBody);
};

export default contactTab;