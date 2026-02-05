import coffee from "./images/coffee.jpg"

function loadHome() {
    const content = document.querySelector('#content');

    const aboutHeading = document.createElement("h2");
    aboutHeading.textContent = "About Us";
    
    content.appendChild(aboutHeading);

    
    const gridContainer = document.createElement("div");
    gridContainer.classList.add("gridContainer");
    content.appendChild(gridContainer);

    const gridLeft = document.createElement("div");
    gridLeft.classList.add("gridLeft");
    gridContainer.appendChild(gridLeft);
    
    const description = document.createElement("p");
    description.textContent = "Here at Clementine's we believe that price and quality shouldn't be exclusive. That's why all of our products are priced at values that won't break your bank account. Don't believe us? Come in and see for yourself. If you're not satisifed, your drink will be on the house! Our commitment to customer satisifaction is why we're rated the number one café in the Northern Hemisphere. It's our way of saying thank you."
    gridLeft.appendChild(description);

    const hoursHeading = document.createElement("h2");
    hoursHeading.textContent = "Hours";
    gridLeft.appendChild(hoursHeading);
    
    const hoursDescription = document.createElement("p");
    hoursDescription.textContent = "Come visit us any time from 8 AM to 7 PM on any day of the week! Holidays excluded";
    gridLeft.appendChild(hoursDescription);

    const gridRight = document.createElement("div");
    gridRight.classList.add("gridRight");
    gridContainer.appendChild(gridRight);

    const coffeeImage = document.createElement("img");
    coffeeImage.src = coffee;
    gridRight.appendChild(coffeeImage);
}
export {
    loadHome
};