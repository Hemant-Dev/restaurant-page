
function createHome(){
    const home = document.createElement('div');
    home.classList.add('home');

    const storeImage = document.createElement('img');
    storeImage.src = `./images/pizza-store.jpeg`;
    storeImage.alt = 'Pizza Store Image.'

    home.appendChild(storeImage);
    home.appendChild(createParagraph("Best pizza in your country"));
    home.appendChild(createParagraph("Made with passion since 1988"));
    home.appendChild(createParagraph("Order online or visit the nearest store!"));

    return home;
}

function createParagraph(string){
    const para = document.createElement('p');
    para.textContent = string;
    return para;
}

function loadHome(){
    const main = document.querySelector('.main');
    main.textContent = '';
    main.appendChild(createHome());
}

export default loadHome;