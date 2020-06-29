const url = "https://localhost:5001/api/coffee/";

let coffees = []

export const getAllCoffee = () => {
    return fetch(url).then(resp => resp.json()).then(parsedCoffees => coffees = parsedCoffees);
}

export const useCoffees = () => coffees.slice()

export const addCoffee = coffee => {
    return fetch(url, {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(coffee)
    })
    .then(getAllCoffee)
}