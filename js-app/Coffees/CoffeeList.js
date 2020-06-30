import { useCoffees } from "./CoffeeProvider.js";
import { Coffee } from "./Coffee.js";
import {AddCoffeeForm} from "./AddCoffeeForm.js"
import { useBeans } from "../Beans/BeanProvider.js";

const contentTarget = document.querySelector("#coffeeContainer")

export const CoffeeList = () => {
    const coffees = useCoffees()
    const beans = useBeans()
    for (const coffee of coffees) {
        contentTarget.innerHTML += Coffee(coffee)
    }
    contentTarget.innerHTML += AddCoffeeForm(beans)
}