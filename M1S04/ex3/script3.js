media = (numeros) => {
    let soma = 0;
    for (let i=0; i<numeros.length; i++) {
        soma += numeros[i];
    }
    return soma / numeros.length
};

let arrayNumeros = [8, 9, 10, 10, 10, 10]
console.log(media(arrayNumeros))