import { getAllCoffee, addCoffee } from "./Coffees/CoffeeProvider.js";
import { CoffeeList } from "./Coffees/CoffeeList.js";
import { getAllBeans } from "./Beans/BeanProvider.js";

getAllCoffee()
getAllBeans()
const button = document.querySelector("#run-button");
button.addEventListener("click", (e) => {
    if(e.target.id === "run-button") {
        CoffeeList()
    }
});



