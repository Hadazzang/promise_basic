fetch('https://jsonplaceholder.typicode.com/users')
.then((response)=> response.text())
.then(result => {
  const user = JSON.parse(result)
  console.log(user)
  console.log(user[1])
  return user[1];
})
.then(user => {
  const {address} = user;
  console.log(address)
  return address
})
.then(address => {
  const {geo} = address;
  console.log(geo)
  return geo
})
.then (geo =>{
  const {lat} = geo;
  console.log(lat)
})