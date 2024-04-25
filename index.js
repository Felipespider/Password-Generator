let sliderElement = document.querySelector("#slider")
let buttonElement = document.querySelector("#button") //Pega o id ou classe pelo mesmo jeito que pega no CSS. EX: Class (.), ID (#)

let sizePassword = document.querySelector("#valor")
let password = document.querySelector("#password")


let containerPassword = document.querySelector("#container-password")

let charset = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!@_"
let novaSenha = " "

sizePassword.innerHTML = sliderElement.value //Mostra o valor do nível do box de valor

slider.oninput = function(){
    sizePassword.innerHTML = this.value //Alteraçao para o Valor atualmente atarvés do This 
}

function generatePassword(){ //Ação após click do botão gerar senha
 let pass = " "
 for (let i = 0, n = charset.length; i < sliderElement.value; ++i) {
    pass += charset.charAt(Math.floor(Math.random() *n)) // ChartAt retorna o número dentro do paramteses do array charset
                                                            // math.floor(math.random() *n) é o número inteiro da multipicação de um número aleatório * n (tamanho do array)
 }

 containerPassword.classList.remove("hide") //ClassList = lista de classe desse id pego lá no inicio, e remove, na prática ele remove aquele HIDE
 password.innerHTML = pass
 novaSenha = pass
}


function copyPassword(){
    alert("Senha copiada com sucesso!")
    navigator.clipboard.writeText(novaSenha)
}


