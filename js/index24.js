async function play() {
  try {
    alert('시작입니다.');
    console.log('welcome');
    const response = await fetch('https://jsonplaceholder.typicode.com/todos/1');
    const result = await response.text();
    console.log(result);
  } catch (error) {
    alert('에러입니다.');
  } finally {
    console.log('작업이 끝났습니다.');
  }
}

play();
