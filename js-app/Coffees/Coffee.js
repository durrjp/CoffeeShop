export const Coffee = (coffee) => {
    return `
        <section>

            <h1>${coffee.title}</h1>
            <h3>Beans Used - ${coffee.beanVariety.name}</h3>
            <ul>
                <li>Region: ${coffee.beanVariety.region}</li>
                <li>Notes: ${coffee.beanVariety.notes}</li>
            </ul>

        </section>
    `
}