const baseUrl = '/user'

const getUsers = async () => {
    let users = await fetch(baseUrl)
    return await users.json()
}

const userService = async (form) => {
    const users = await fetch(baseUrl, {
        method: 'POST',
        headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(form)
    })

    return await users.json()
}


export {getUsers, userService}