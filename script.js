fetch('https://jsonplaceholder.typicode.com/posts')
    .then((response) => response.json())
        .then((data) => {
            data.map((user) => document.write(`<div><b>айди</b>: ${user.id}<br> <b>название</b>: ${user.title} <br> <b>тело</b>: ${user.body} <hr></div>`))
        })
        .catch((error) => document.write(error))
        