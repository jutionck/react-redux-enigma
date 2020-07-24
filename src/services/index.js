const baseUrl = '/user'

const getUsers = async () => {
    let users = await fetch(baseUrl)
    return await users.json()
}


const deleteUser = async (userID) => {
    const user = await fetch(baseUrl + `/${userID}`, {
        method: 'DELETE',
        headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json'
        }
    })

    return user;
}


export {getUsers, deleteUser}