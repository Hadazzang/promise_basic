// fetch('https://jsonplaceholder.typicode.com/posts/1')
// .then(response => response.text(), (error) => {console.log(error)})
// .then(result => {
//   console.log('welcome');
//   console.log(result);
// })

fetch('https://jsonplaceholder123.typicode.com/posts/1')
.then(response => response.text())
.then(result => {
  console.log('welcome');
  console.log(result)
})
.catch(()=>{console.log('error가 발생되었습니다. 작업이 실행되지 못했습니다.')})  
.finally(()=> {console.log('작업이 마감되었습니다.')})