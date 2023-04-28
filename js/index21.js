async function main(){
  const response = await fetch('https://jsonplaceholder.typicode.com/comments');
  const result = await response.text();
  const data = await JSON.parse(result)
  const basic = data.filter((item,index) => item.postId === 2);
  console.log(basic)
  for(let i in basic){
    document.write(
      `
      <dl>
      <dt>${basic[i].name}</dt>
      <dd>${basic[i].email}</dd>
      <dd>${basic[i].body}}</dd>
      </dl>
      `
    )
  }
}

main()