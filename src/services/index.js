const baseUrl = '/user'

const getUsers = async () => {
    let users = await fetch(baseUrl)
    return await users.json()
}


const userService = (title, body) => {
    return fetch("https://jsonplaceholder.typicode.com/posts", {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            body: JSON.stringify({
                'title':title,
                'body': body
            }),
        }
    })
}

export {getUsers, userService}