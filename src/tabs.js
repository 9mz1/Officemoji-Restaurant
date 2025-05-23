import createHomePage from "./home";
import createMenuPage from "./menu";
// import createAboutPage from "./about";

function createTabs() {
    const nav = document.querySelector('nav');

    const buttons = ['home', 'menu', 'about'];
    buttons.forEach((button) => {
        const buttonElement = document.createElement('button');
        buttonElement.textContent = button;
        buttonElement.classList.add(button);
        nav.appendChild(buttonElement);
    });

    const home = document.querySelector('.home');
    const menu = document.querySelector('.menu');
    const about = document.querySelector('.about');

    home.addEventListener('click', () => {
        createHomePage();
    });

    menu.addEventListener('click', () => {
        createMenuPage();
    });

    about.addEventListener('click', () => {
        createAboutPage();
    });
}

export default createTabs;