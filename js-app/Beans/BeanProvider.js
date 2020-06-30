const url = "https://localhost:5001/api/beanvariety/";

let beans = []

export const getAllBeans = () => {
    return fetch(url).then(resp => resp.json()).then(parsedBeans => beans = parsedBeans);
}

export const useBeans = () => beans.slice()

