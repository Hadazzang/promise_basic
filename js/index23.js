async function str() {
  try{
    const response = await fetch('https://jsonplaceholder.typicode.com/todos/1')
    const result = await response.text();
    console.log(result)
  }
  catch (error){
    console.log('에러입니다.')
  }
  finally{
    console.log('작업이 끝났습니다.')
  }
}

str()