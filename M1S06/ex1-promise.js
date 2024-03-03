// Construa uma função que irá verificar se um valor passado pelo parâmetro é par. Construa as validações dentro de
// uma promise para que caso seja uma par retorne para o then a mensagem: "Número validado é par”.

// Caso o valor seja ímpar, retorne para o catch a mensagem: “Error: número informado é impar”.

// OBS: Se for par ele deve chamar o “resolve”, se não for par ele irá chamar o “reject”. Não esqueça de enviar a
//mensagem como parâmetro

function isEven(number) {
    const promise = new Promise((resolve,reject)=>{
        if(number % 2 === 0){
            resolve("Número validado é par")
        }
        else {
            reject("Error: número informado é impar")
        }
    })
    promise
    .then((response)=>{
        console.log(response)
        return response
    })
    .catch((err)=>{
        console.log(err)
        return err
    })
}

isEven(3)
isEven(4)