const planetas = [ "Terra", "Marte", "Plutão", "Vênus", "Júpiter", "Saturno", "terra", "marte", "plutão", "vênus", "júpiter", "saturno"];

var nome = prompt ("me diga o nome de um planeta");

if (planetas.includes(nome)) //include serve para fazer coparação de strings dentro do vetor

document.write ("o/a "+ nome + " está na lista");

else{
    document.write ("o/a " + nome + " não está na lista")
}