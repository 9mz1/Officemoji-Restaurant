import createMenuPage from "./menu";

function createHomePage() {
    const content = document.querySelector("#content");
    content.innerHTML = "";

    const intro = document.createElement('p');
    intro.textContent = 'The Best Restaurant In The Emoji-World';

    const button = document.createElement('button');
    button.textContent = 'Order Now';

    button.addEventListener('click', () => {
        createMenuPage();
    })

    content.appendChild(intro);
    content.appendChild(button);
}

export default createHomePage;