import { useCoffees } from "./CoffeeProvider.js";
import { Coffee } from "./Coffee.js";
import {AddCoffeeForm} from "./AddCoffeeForm.js"

const contentTarget = document.querySelector("#coffeeContainer")

export const CoffeeList = () => {
    const coffees = useCoffees()
    for (const coffee of coffees) {
        contentTarget.innerHTML += Coffee(coffee)
    }
    contentTarget.innerHTML += AddCoffeeForm()
}