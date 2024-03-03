function getUserInfo() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      let user = {
        nome: "Bruno",
        idade: 31,
        email: "bruno.teste@gmail.com",
      };
      //user = undefined

      if (user != undefined) {
          resolve(user); //Fica aqui dentro para que ele retorne o user com valor
      } else {
        reject('Erro: Não foi possível carregar os dados do usuário.')
      }
    }, 2000);
  });
}

// Com async e await
async function displayUserInfo() {
    let display = await getUserInfo().catch(err=>err)
    console.log(display)
}

// Sem async e await
// function displayUserInfo2() {
//     let display2 = getUserInfo()
//     display2
//     .then(obj=>console.log(obj))
//     .catch(err=>console.log(err))
// }

displayUserInfo()