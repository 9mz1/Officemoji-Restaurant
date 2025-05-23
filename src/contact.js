function createContactPage() {
    const content = document.querySelector("#content");
    content.innerHTML = "";

    const heading = document.createElement('h1');
    heading.textContent = 'Contact Us';

    const contactContainer = document.createElement('div');
    contactContainer.classList.add('contactContainer');

    const chefIMG = document.createElement('img');
    chefIMG.src = '/assets/chefMoji.jpeg';
    chefIMG.height = '200';

    const emailInfo = document.createElement('p');
    emailInfo.textContent = 'officemojirestaurant@gmail.com';
    emailInfo.classList.add('info');

    const numberInfo = document.createElement('p');
    numberInfo.textContent = '123-456-7890';
    numberInfo.classList.add('info');

    const addressInfo = document.createElement('p');
    addressInfo.textContent = '21 st, laugh corner, emoji-world';
    addressInfo.classList.add('info');


    contactContainer.appendChild(chefIMG);
    contactContainer.appendChild(numberInfo);
    contactContainer.appendChild(emailInfo);
    contactContainer.appendChild(addressInfo);

    content.appendChild(heading);
    content.appendChild(contactContainer);
}

export default createContactPage;