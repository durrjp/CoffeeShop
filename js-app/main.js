import { getAllCoffee, addCoffee } from "./Coffees/CoffeeProvider.js";
import { CoffeeList } from "./Coffees/CoffeeList.js";

getAllCoffee()
const button = document.querySelector("#run-button");
button.addEventListener("click", (e) => {
    if(e.target.id === "run-button") {
        CoffeeList()
    }
});

const addCoffeeButton = document.querySelector("#run-button");
addCoffeeButton.addEventListener("click", (e) => {
    if(e.target.id === "addCoffee") {
        e.preventDefault()
        const coffeeTitle = document.querySelector("#coffeeTitle").value
        const date = document.querySelector("#eventDate").value
        const location = document.querySelector("#eventLocation").value
        const currentUserId = parseInt(sessionStorage.getItem("userId"))


        // Make a new object representation of a note
        const newCoffee = {
            user: currentUserId,
            event: eventTitle,
            date: date,
            location: location
        }

        addCoffee(newCoffee)
    }
});

