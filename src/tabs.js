import createHomePage from "./home";
import createMenuPage from "./menu";
import createContactPage from "./contact";

function createTabs() {
    const nav = document.querySelector('nav');

    const buttons = ['home', 'menu', 'contact'];
    buttons.forEach((button) => {
        const buttonElement = document.createElement('button');
        buttonElement.textContent = button;
        buttonElement.classList.add(button);
        nav.appendChild(buttonElement);
    });

    const home = document.querySelector('.home');
    const menu = document.querySelector('.menu');
    const contact = document.querySelector('.contact');

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