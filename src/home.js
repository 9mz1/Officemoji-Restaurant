import createMenuPage from "./menu";

function createHomePage() {
    const content = document.querySelector("#content");
    content.innerHTML = "";

    const container = document.createElement('div');
    container.classList.add('container');

    const intro = document.createElement('p');
    intro.textContent = 'The Best Restaurant In The Emoji-World';

    const sticker = document.createElement('img');
    sticker.src = '/.assets/sticker.png';
    sticker.classList.add('sticker');

    const exclamationMark = document.createElement('img');
    exclamationMark.src = './assets/exclamationmark.png';
    exclamationMark.classList.add('exclamation-mark');

    const button = document.createElement('button');
    button.textContent = 'Order Now';

    button.addEventListener('click', () => {
        createMenuPage();
    })

    container.appendChild(sticker);
    container.appendChild(exclamationMark);
    container.appendChild(intro);
    container.appendChild(button);
    content.appendChild(container);
}

export default createHomePage;