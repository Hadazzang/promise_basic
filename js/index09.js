const todo = {
  userId : 1,
  title : '수정',
  completed : true
}

fetch('https://jsonplaceholder.typicode.com/todos/9', {
  method:'PUT',
  body:JSON.stringify(todo)
})

.then(response => response.text())
.then(result => console.log(result))