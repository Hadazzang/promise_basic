async function main(){
  const response = await fetch('https://jsonplaceholder.typicode.com/users');
  const result = await response.text();
  const data = await JSON.parse(result);
  // console.log(data[1].address.geo.lat)
  document.write(`<p>${data[1].address.geo.lat}</p>`)
}

main();