media = (numeros) => {
    let soma = 0;
    for (let i in numeros){soma += numeros[i]}
    return soma / numeros.length
};

let arrayNumeros = [8, 9, 10]
console.log(media(arrayNumeros))