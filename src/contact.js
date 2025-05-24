function createContactPage() {
    const content = document.querySelector("#content");
    content.innerHTML = "";

    const heading = document.createElement('h1');
    heading.classList.add('heading');
    heading.textContent = 'Contact Us';

    const contactContainer = document.createElement('div');
    contactContainer.classList.add('contact-container');

    
    const sticker = document.createElement('img');
    sticker.src = '/assets/sticker.png';
    sticker.classList.add('pos')
    sticker.classList.add('sticker');

    const chefIMG = document.createElement('img');
    chefIMG.src = '/assets/chefMoji.jpeg';
    chefIMG.height = '300';

    const rightContainer = document.createElement('div');
    rightContainer.classList.add('right-container');

    const emailInfo = document.createElement('p');
    emailInfo.textContent = 'officemojirestaurant@gmail.com';
    emailInfo.classList.add('info');

    const numberInfo = document.createElement('p');
    numberInfo.textContent = '123-456-7890';
    numberInfo.classList.add('info');

    const addressInfo = document.createElement('p');
    addressInfo.textContent = '21 street, laugh corner, emoji-world';
    addressInfo.classList.add('info');


    rightContainer.appendChild(emailInfo);
    rightContainer.appendChild(numberInfo);
    rightContainer.appendChild(addressInfo);
    contactContainer.appendChild(chefIMG);
    contactContainer.appendChild(rightContainer);

    content.appendChild(heading);
    content.appendChild(contactContainer);
    content.appendChild(sticker);
}

export default createContactPage;