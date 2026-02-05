function loadMenu() {
    
    const content = document.querySelector('#content');
    const menuHeading = document.createElement("h2");
    menuHeading.textContent = "Menu";
    menuHeading.classList.add("menuHeading");
    content.appendChild(menuHeading);
    const menuSection = document.createElement("div");
    menuSection.classList.add("menuSection");
    content.appendChild(menuSection);

    const menuCardHotDrinks = document.createElement("div");
    menuCardHotDrinks.classList.add("menuCard");
    menuSection.appendChild(menuCardHotDrinks);
    const hotDrinksHeading = document.createElement("h3");
    hotDrinksHeading.textContent = "Hot Drinks";
    menuCardHotDrinks.appendChild(hotDrinksHeading);

    const hotDrinks = [
        {name: "Hot Coffee", price: 3.00, description: "Our most popular item, freshly ground and steaming hot!"},
        {name: "Latte", price: 4.00, description: "Want it with art? Just ask!"},
        {name: "Espresso", price: 3.50, description: "I'm working late, cause I'm a barista!"},
        {name: "Americano", price: 4.00, description: "This item can also be cold!"},
    ];
    hotDrinks.forEach(item => {
        const menuItem = document.createElement("div");
        menuItem.classList.add("menuItem");
        menuCardHotDrinks.appendChild(menuItem);
        const menuItemHeading = document.createElement("h4");
        menuItemHeading.textContent = `${item.name} - ${item.price}$`;
        menuItem.appendChild(menuItemHeading);
        const description = document.createElement("p");
        description.textContent = item.description;
        menuItem.appendChild(description);
    })
    

    const menuCardColdDrinks = document.createElement("div");
    menuCardColdDrinks.classList.add("menuCard");
    menuSection.appendChild(menuCardColdDrinks);
    const coldDrinksHeading = document.createElement("h3");
    coldDrinksHeading.textContent = "Cold Drinks"
    menuCardColdDrinks.appendChild(coldDrinksHeading);
    const coldDrinks = [
        {name: "Iced Latte", price: 3.00, description: "One of Clementine's specialties"},
        {name: "Vanilla Frap", price: 5.00, description: "Basic? Sure. Iconic? Yes."},
        {name: "Chocolate Chip Frap", price: 5.00, description: "Our store owner's personal favorite"},
        {name: "Iced Americano", price: 4.00, description: "This item can also be hot!"},
    ];
    coldDrinks.forEach(item => {
        const menuItem = document.createElement("div");
        menuItem.classList.add("menuItem");
        menuCardColdDrinks.appendChild(menuItem);
        const menuItemHeading = document.createElement("h4");
        menuItemHeading.textContent = `${item.name} - ${item.price}$`;
        menuItem.appendChild(menuItemHeading);
        const description = document.createElement("p");
        description.textContent = item.description;
        menuItem.appendChild(description);
    })

    const menuCardPastries = document.createElement("div");
    menuCardPastries.classList.add("menuCard");
    menuSection.appendChild(menuCardPastries);
    const pastriesHeading = document.createElement("h3");
    pastriesHeading.textContent = "Pastries"
    menuCardPastries.appendChild(pastriesHeading);
    const pastries = [
        {name: "Iced Latte", price: 3.00, description: "One of Clementine's specialties"},
        {name: "Vanilla Frap", price: 5.00, description: "Basic? Sure. Iconic? Yes."},
        {name: "Chocolate Chip Frap", price: 5.00, description: "Our store owner's personal favorite"},
        {name: "Iced Americano", price: 4.00, description: "This item can also be hot!"},
    ];
    pastries.forEach(item => {
        const menuItem = document.createElement("div");
        menuItem.classList.add("menuItem");
        menuCardPastries.appendChild(menuItem);
        const menuItemHeading = document.createElement("h4");
        menuItemHeading.textContent = `${item.name} - ${item.price}$`;
        menuItem.appendChild(menuItemHeading);
        const description = document.createElement("p");
        description.textContent = item.description;
        menuItem.appendChild(description);
    })
}
export {
    loadMenu
};