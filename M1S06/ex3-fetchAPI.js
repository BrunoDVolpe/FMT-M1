fetch('./data.json').then(respFetch=>respFetch.json())
.then(data=>console.log(data))
.catch(err=>console.log(err))