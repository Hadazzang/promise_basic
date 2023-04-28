async function fetchStr() {
  const response = await fetch('https://jsonplaceholder.typicode.com/photos');
  const result = await response.text();
  console.log(result);
  const data = await JSON.parse(result);
  console.log(data);
  const basic = data.filter((item) => item.albumId === 61);
  console.log(basic);
  for (let i of basic) {
    document.write(
      `
      <figure>
      <img src="${i.thumbnailUrl}" alt="${i.title}">
      <figcaption>${i.title}</figcaption>
      </figure>
      `
    );
  }
}

fetchStr();
