fetch('https://jsonplaceholder.typicode.com/todos')
.then(response => response.text())
.then(result => {
  const basic = JSON.parse(result);   
  // console.log(basic);
  const data = basic.filter((item) => item.userId === 4);
  console.log(data);
  for(let i in data){
    document.write(
      `
      <p>${data[i].id} : ${data[i].title}</p>
      `
    )
  }
})
