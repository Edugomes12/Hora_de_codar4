function inicio (){

var escolha = parseInt (prompt("deseja fazer cadastros? 1=cadastro 2=planeta 3=fruta"));

if (escolha == 1){
    cadastro ();
}

else if (escolha == 2 ){
    planeta ();
}

else {
    fruta ();
}

function cadastro (){

var nomes = [];
var i = 0;
var j = 0;

while (true) {
    var nome = prompt("Digite o nome da pessoa ou diga 'pare' para finalizar o processo:");
    if (nome.toLowerCase() === "pare") { //toLowerCase é usado para conveter letras maiuculas para minuscula
        break;
    }
    nomes.push(nome); //tem que ser colocado depois do break
    i++;
}

document.write("Quantidade de estudantes é de: " + i + "<br>");
document.write("Os alunos são:<br>");

while (j < nomes.length){
    document.write (nomes[j] + "<br>"); // O j serve para acessar todos os elementos do vetor/array
    j++
}
}

function fruta (){
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
}

function planeta(){
    const planetas = [ "Terra", "Marte", "Plutão", "Vênus", "Júpiter", "Saturno", "terra", "marte", "plutão", "vênus", "júpiter", "saturno"];

var nome = prompt ("me diga o nome de um planeta");

if (planetas.includes(nome)) //include serve para fazer coparação de strings dentro do vetor

document.write ("o/a "+ nome + " está na lista");

else{
    document.write ("o/a " + nome + " não está na lista")
}
}

}

inicio ();