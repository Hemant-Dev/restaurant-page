function createMenu(){
    const menu = document.createElement('div');
    menu.classList.add('menu');

    menu.appendChild(
        createMenuItem(
            "Salsiccia",
            "Tomato sauce, Mozarella, Tomato, Homemade sausage, Garlic, Basil"
        )
    );
    menu.appendChild(
        createMenuItem(
          "Disgustoso",
          "Tomato sauce, Bacon, Pineapple, Olives, Basil"
        )
      );
      menu.appendChild(
        createMenuItem(
          "Ratatouille",
          "Tomato sauce, Mozarella, Onion, Pepper, Champignons, Basil"
        )
      );
      menu.appendChild(
        createMenuItem(
          "Pizza",
          "Tomato sauce, Mozarella, Tomato, Onion, Feta cheese, Chilli"
        )
      );
      menu.appendChild(
        createMenuItem(
          "Pasta",
          "White sauce, Mozarella, Shrimps, Salmon, Pineapple, Olives, Basil"
        )
      );
      menu.appendChild(
        createMenuItem(
          "Kempas",
          "Tomato sauce, Mozarella, Homemade sausage, Bacon, Garlic, Pepper, Chilli"
        )
      );
    // console.log(`menu is created`);
    
    return menu;
}

function createMenuItem(name, description){
    const menuItem = document.createElement('div');
    menuItem.classList.add('menu-item');

    const foodName = document.createElement('h2');
    foodName.textContent = name;
    
    const foodDescription = document.createElement('p');
    foodDescription.textContent = description;
    
    const foodImage = document.createElement('img');
    foodImage.src = `./images/menu-images/${name.toLowerCase()}.jpg`;
    foodImage.alt = `Image of ${foodName}`;

    menuItem.appendChild(foodImage);
    menuItem.appendChild(foodName);
    menuItem.appendChild(foodDescription);

    return menuItem;
}

function loadMenu() {
  const main = document.querySelector('.main');
    main.textContent = '';
    main.appendChild(createMenu());
}

export default loadMenu;
