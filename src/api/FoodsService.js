import axios from 'axios'

const baseUrl = '/food'

const getFoods = async () => {
    let users = await axios.get(baseUrl);
    return users
}

const createFoods = async (form) => {
    const foods = await fetch(baseUrl, {
        method: 'POST',
        headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(form)
    })

    return await foods.json()
}



export {getFoods, createFoods}
