export const AddCoffeeForm = () => {
    return `
        <form class="addCoffeeForm">
            <fieldset>
                <label for="eventTitle">Event: </label>
                <input type="text" id="eventTitle" name="eventTitle">
            </fieldset>
            <fieldset>
                <label for="eventDate">Date: </label>
                <input type="date" id="eventDate" name="eventDate">
            </fieldset>
            <fieldset>
                <label for="eventLocation">Location: </label>
                <input type="text" id="eventLocation" name="eventLocation">
            </fieldset>
        </form>
        <button id="addCoffee">Add Coffee</button>
    `
}