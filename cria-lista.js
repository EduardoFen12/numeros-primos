function criaListaDeRespostas(divisores, numero){
    console.log(divisores)

    let tagUl = document.querySelector("#lista-de-respostas");

    let tagLi = document.createElement("li");

    if(divisores === 2){
        tagLi.innerText = numero + " é primo!";
        tagUl.appendChild(tagLi);
    }else{
        tagLi.innerText = numero+ " não é primo!"
        tagUl.appendChild(tagLi);
    }
}

