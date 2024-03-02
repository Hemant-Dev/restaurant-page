function createHome(){
    const home = document.createElement('div');
    home.classList.add('home');

    // const chefImage = document.createElement('img');
    // chefImage.alt = 'chefImage'

    home.appendChild(createParagraph("Best pizza in your country"));
    home.appendChild(createParagraph("Made with passion since 1988"));
    // home.appendChild(chefImage);
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