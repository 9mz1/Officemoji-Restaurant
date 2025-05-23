import createHomePage from "./home";
import createMenuPage from "./menu";
import createContactPage from "./contact";

function createTabs() {
    const nav = document.querySelector('nav');

    const buttons = ['Home', 'Menu', 'Contact'];
    buttons.forEach((button) => {
        const buttonElement = document.createElement('button');
        buttonElement.textContent = button;
        buttonElement.classList.add('nav-buttons');
        buttonElement.classList.add(button);
        nav.appendChild(buttonElement);
    });

    const home = document.querySelector('.Home');
    const menu = document.querySelector('.Menu');
    const contact = document.querySelector('.Contact');

    home.addEventListener('click', () => {
        createHomePage();
    });

    menu.addEventListener('click', () => {
        createMenuPage();
    });

    contact.addEventListener('click', () => {
        createContactPage();
    });
}

export default createTabs;