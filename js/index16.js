fetch('https://jsonplaceholder.typicode.com/users')
.then(response => response.text())
.then(result => {
  const users =  JSON.parse(result);
  // console.log(users);
  // console.log(users[5])
  const {id} = users[5];
  // console.log(id)
  fetch(`https://jsonplaceholder.typicode.com/posts?userId=${id}`)
  .then(response => response.text())
  .then(posts => {
    const data = JSON.parse(posts);
    console.log(data)
    const num = data[0]
    console.log(num)
    console.log(num.title)
  })
})