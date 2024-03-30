var lista = ["morango", "maçã", "uva", "melancia", "laranja", "manga"];

while(lista.length >=1){
    alert (lista);
    var fruta = prompt ("me diga qual seria a fruta");
    if (lista.includes(fruta)){
        var index = lista.indexOf(fruta);
        lista.splice(index, 1)
        alert ("fruta removida com sucesso")
    }
    else {
        alert ("Fruta indisponível no nosso mercado")
    }
}
alert ("Lista de compras finalizada");

