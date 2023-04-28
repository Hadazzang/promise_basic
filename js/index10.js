fetch('https://jsonplaceholder.typicode.com/todos/10', {
  method:"DELETE"
})
.then(response => response.text())
.then(result => console.log(result))