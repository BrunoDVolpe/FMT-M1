media = (numeros) => {
    let soma = 0;
    for (let i of numeros) {
        soma += i;
    }
    return soma / numeros.length
};

let arrayNumeros = [8, 9, 10, 10, 10, 10]
console.log(media(arrayNumeros))