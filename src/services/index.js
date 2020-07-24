export const userService = (title, body) => {
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