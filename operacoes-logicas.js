var nome, nota01, nota02, media, passou;

passou = false;
nome = prompt("Digite o nome do aluno: ")
nota01 = prompt("Digite a nota 01 do aluno:")
nota02 = prompt("Digite a nota 02 do aluno: ")
media = (parseInt(nota01) + parseInt(nota02)) / 2

if (media >= 50)
    passou = true;

if(passou || (media >= 60 && media <= 80))
    alert("Aprovado! " + nome)
else
    alert("Reprovado! " + nome)