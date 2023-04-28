fetch('https://jsonplaceholder.typicode.com/todos/10')
.then(response => response.text())
.then(result => {
  const objTodo = JSON.parse(result);
  console.log(objTodo);
  console.log(objTodo.title)
})
