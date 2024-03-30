function inicio (){

var escolha = parseInt (prompt("deseja fazer cadastros? 1=sim 2=Sair"));

if (escolha == 1){
    cadastro ();
}

else if (escolha == 2 ){
    Sair ();
}

else {
    Erro ();
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

function Sair (){
    document.write ("volte quando precisar.")
}

function Erro(){
    alert("tente novamente");
    inicio ();
}

}

inicio ();