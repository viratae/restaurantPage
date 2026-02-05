import "./styles.css";
import {
    loadHome
} from "./home.js";
import {
    loadMenu
} from "./menu.js";
import {
    loadContact
} from "./contact.js";
// Loads the home page inititally 
loadHome();

console.log("I am connected!");
const content = document.querySelector('#content');
const homeButton = document.querySelector('#homeButton');
const menuButton = document.querySelector('#menuButton');
const contactButton = document.querySelector('#contactButton');
homeButton.addEventListener('click', () => {
    content.innerHTML = "";
    loadHome();
});
menuButton.addEventListener('click', () => {
    content.innerHTML = "";
    loadMenu();
});
contactButton.addEventListener('click', () => {
    content.innerHTML = "";
    loadContact();
});