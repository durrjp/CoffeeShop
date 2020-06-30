import { addCoffee } from "./CoffeeProvider.js";

export const AddCoffeeForm = (beans) => {
    return `
        <form class="addCoffeeForm">
            <fieldset>
                <label for="coffeeTitle">Coffee Name: </label>
                <input type="text" id="coffeeTitle" name="coffeeTitle">
            </fieldset>
            <fieldset>
                <label> Bean Variety: </label>
                <select id="beanSelect">
                    <option value="0">Select a bean...</option>
                    ${
                        beans.map(bean => {
                            return `<option value="${bean.id}">${bean.name}</option>`
                        })
                    }
                </select>
            </fieldset>
        </form>
        <button id="addCoffee">Add Coffee</button>
    `
}

const eventHub = document.querySelector(".eventHub");
eventHub.addEventListener("click", (e) => {
    if(e.target.id === "addCoffee") {
        const coffeeTitle = document.querySelector("#coffeeTitle").value
        const beanSelection = document.querySelector("#beanSelect").value
        const beanInt = parseInt(beanSelection)

        const newCoffee = {
            title: coffeeTitle,
            beanVarietyId: beanInt
        }
        e.preventDefault()
        addCoffee(newCoffee)
    }
});

