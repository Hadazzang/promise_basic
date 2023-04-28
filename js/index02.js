fetch('https://jsonplaceholder.typicode.com/todos/10')
.then(response  => response.text())
.then(result => console.log(result))
