function consultaCEP(cep) {
    return fetch(`https://viacep.com.br/ws/${cep}/json/`, {method: 'GET'})
    .then(responseFetch=>responseFetch.json())
    .then(responseAPI=>{
        window.alert(`${responseAPI.logradouro}, ${responseAPI.complemento} - ${responseAPI.bairro} - ${responseAPI.localidade}/${responseAPI.uf}`)
    
        let resposta = prompt('O endereço está correto? [sim/não]')
        if (resposta === 'sim') {
            localStorage.setItem('endereco', JSON.stringify(responseAPI))
        }
    })
    .catch(err=>console.log('ERRO:', err))
}

let endereco = localStorage.getItem('endereco')
if (endereco) {
    let resposta = prompt("Já existe um endereço no banco de dados.\nDeseja fazer uma nova consulta? [sim/não]").toLowerCase().trim()
    if (resposta === 'sim'){
        consultaCEP(prompt("Informe o novo CEP: "))
    } else {
        // Exercício não pediu a parte abaixo
        let end = JSON.parse(localStorage.getItem('endereco'))
        alert(`Sua rua permaneceu ${end.logradouro}`)
    }
} else {
    consultaCEP(prompt("Informe um CEP: "))
}