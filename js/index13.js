fetch('https://jsonplaceholder.typicode.com/users')
.then(response => response.text())
.then(result => {
  const users = JSON.parse(result);
  console.log(users);
  const {id} = users[2]
  fetch(`https://jsonplaceholder.typicode.com/photos?albumId=${id}`)
  .then(response => response.text())
  .then(album => console.log(album))
})