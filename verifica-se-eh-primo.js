let divisores = 0

function verifica(){
    let inputNumero = document.querySelector("input");
    inputNumero.focus();
    let numero = parseInt(inputNumero.value);
    console.log(numero);

    verificaNumero(numero);
    criaListaDeRespostas(divisores, numero);
    inputNumero.value = "";
    divisores = 0;
    inputNumero.focus();
}

function verificaNumero(numero){

    for(let i = 1; i <= numero; i++){
        if(numero % i === 0){
            divisores++;                
        }
    }

    return divisores;
}

let botao = document.querySelector("button");

botao.onclick = verifica;