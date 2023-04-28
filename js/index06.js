fetch('https://jsonplaceholder.typicode.com/photos')
  .then((response) => response.text())
  .then((result) => {
    const basic = JSON.parse(result);
    // console.log(basic);
    const data = basic.filter((item) => item.albumId === 1);
    // console.log(data);
    for (let i of data) {
      document.write(
        `
  <figure>
  <img src="${i.thumbnailUrl}" alt="${i.title}">
  <figcaption>${i.title}</figcaption>
  </figure>
  `
      );
    }
  });
