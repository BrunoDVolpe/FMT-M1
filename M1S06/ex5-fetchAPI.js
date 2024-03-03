fetch('https://api.thecatapi.com/v1/images/search?limit=10')
.then(respFetch=>respFetch.json())
.then(respList=>{
    respList.forEach((el)=>{
        document.write(`<img src=${el.url} width='200px' /><br />`)
    })
})