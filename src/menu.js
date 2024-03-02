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
          "Colorato",
          "Tomato sauce, Mozarella, Onion, Pepper, Champignons, Basil"
        )
      );
      menu.appendChild(
        createMenuItem(
          "Pomodoro",
          "Tomato sauce, Mozarella, Tomato, Onion, Feta cheese, Chilli"
        )
      );
      menu.appendChild(
        createMenuItem(
          "Crema",
          "White sauce, Mozarella, Shrimps, Salmon, Pineapple, Olives, Basil"
        )
      );
      menu.appendChild(
        createMenuItem(
          "Carne",
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
    foodImage.src = ``;
    foodImage.alt = ``;

    // menuItem.appendChild(foodImage);
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
