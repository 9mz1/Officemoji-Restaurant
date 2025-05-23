function createMenuPage() {
    const content = document.querySelector("#content");
    content.innerHTML = "";

    const heading = document.createElement('h1');
    heading.textContent = 'Menu';

    const itemContainer = document.createElement('div');
    itemContainer.classList.add('item-container');

    const items = [
        {'Name': 'Burger', 'Price': '$4.99', 'img': './assets/burger.jpeg'},
        {'Name': 'Burrito', 'Price': '$6.99', 'img': './assets/burrito.jpeg'},
        {'Name': 'Donut', 'Price': '$1.99', 'img': './assets/donut.jpeg'},
        {'Name': 'Hotdog', 'Price': '$3.99', 'img': './assets/hotdog.jpeg'},
        {'Name': 'Leg Piece', 'Price': '$0.99', 'img': './assets/legpiece.jpeg'},
        {'Name': 'Loaded Fries', 'Price': '$5.99', 'img': './assets/loadedfries.jpeg'},
        {'Name': 'Salad Bowl', 'Price': '$2.99', 'img': './assets/saladbowl.jpeg'},
        {'Name': 'Sandwich', 'Price': '$3.99', 'img': './assets/sandwich.jpeg'},
        {'Name': 'Taco', 'Price': '$8.99', 'img': './assets/taco.jpeg'},
    ]

    items.forEach((item) => {
        const itemElement = document.createElement('div');
        itemElement.classList.add('itemCard');

        const itemName = document.createElement('h2');
        itemName.classList.add('itemName');
        itemName.textContent = item.Name

        const itemPrice = document.createElement('p');
        itemPrice.classList.add('itemPrice');
        itemPrice.textContent = item.Price;

        const itemIMG = document.createElement('img');
        itemIMG.classList.add('itemIMG');
        itemIMG.src = item.img;
        itemIMG.height = '150';
        // itemIMG.width = '400'

        itemElement.appendChild(itemIMG);
        itemElement.appendChild(itemName);
        itemElement.appendChild(itemPrice);
        itemContainer.appendChild(itemElement);
    });

    content.appendChild(heading);
    content.appendChild(itemContainer);
}

export default createMenuPage;