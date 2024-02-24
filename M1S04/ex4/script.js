function adicao(num1, num2, funcaoAnonima){
    let soma = num1 + num2;
    funcaoAnonima(soma);
}

adicao(2, 2, (arg)=>{
    console.log("O resultado final é " + arg);
})