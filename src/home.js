import createMenuPage from "./menu";

function createHomePage() {
    const content = document.querySelector("#content");
    content.innerHTML = "";

    const container = document.createElement('div');
    container.classList.add('container');

    const intro = document.createElement('p');
    intro.textContent = 'The Best Restaurant In The Emoji-World';

    const button = document.createElement('button');
    button.textContent = 'Order Now';

    button.addEventListener('click', () => {
        createMenuPage();
    })

    container.appendChild(intro);
    container.appendChild(button);
    content.appendChild(container);
}

export default createHomePage;