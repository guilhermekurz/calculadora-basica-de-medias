var alunos = [];
var medias = [];

alert("Se quiser calcular a média clique no OK!");

var aluno = prompt("Qual é o nome do aluno?");
while (aluno == "") {
  var aluno = prompt("Qual é o nome do aluno?");
}

var n1 = prompt("Nota do 1º Trimestre: ");
while (n1 == "") {
  var n1 = prompt("Nota do 1º Trimestre: ");
}

var n2 = prompt("Nota do 2º Trimestre: ");
while (n2 == "") {
  var n2 = prompt("Nota do 2º Trimestre: ");
}

var n3 = prompt("Nota do 3º Trimestre: ");
while (n3 == "") {
  var n3 = prompt("Nota do 3º Trimestre: ");
}
function calcMedia(n1, n2, n3) {
  var nota1 = n1;
  var nota2 = n2;
  var nota3 = n3;
  var media = ((nota1 + nota2 + nota3) / 3).toFixed(2);
  return media;
}
var mediaFinal = calcMedia(parseFloat(n1), parseFloat(n2), parseFloat(n3));

var passou = "";

if (mediaFinal >= 8) {
  var passou = "Parabéns, você passou de ano com uma ótima nota!";
} else if (mediaFinal >= 6) {
  var passou = "Você passou de ano, mas pode melhorar a nota no próximo ano!";
} else {
  var passou =
    "Você não conseguiu passar de ano, estude mais e você conseguirá passar na recuperação!";
}

alert(
  `O aluno ${aluno} tirou no \n 1º Trimestre a nota: ${n1} \n 2º Trimestre a nota: ${n2} \n 3º Trimestre a nota: ${n3} \n Fechando o ano com a média: ${mediaFinal} \n ${passou}`
);

var totalAlunos = alunos.push(aluno);

var totalMedias = medias.push(mediaFinal);

var dnv = prompt("Quer calcular outra vez? [SIM ou NÃO] ").toLowerCase();
while (dnv == "") {
  var dnv = prompt("Quer calcular outra vez? [SIM ou NÃO] ").toLowerCase();
}

while (dnv === "sim") {
  var aluno = prompt("Qual é o nome do aluno?");
  while (aluno == "") {
    var aluno = prompt("Qual é o nome do aluno?");
  }

  var n1 = prompt("Nota do 1º Trimestre: ");
  while (n1 == "") {
    var n1 = prompt("Nota do 1º Trimestre: ");
  }

  var n2 = prompt("Nota do 2º Trimestre: ");
  while (n2 == "") {
    var n2 = prompt("Nota do 2º Trimestre: ");
  }

  var n3 = prompt("Nota do 3º Trimestre: ");
  while (n3 == "") {
    var n3 = prompt("Nota do 3º Trimestre: ");
  }
  function calcMedia(n1, n2, n3) {
    var nota1 = n1;
    var nota2 = n2;
    var nota3 = n3;
    var media = ((nota1 + nota2 + nota3) / 3).toFixed(2);
    return media;
  }
  var mediaFinal = calcMedia(parseFloat(n1), parseFloat(n2), parseFloat(n3));

  var passou = "";

  if (mediaFinal >= 8) {
    var passou = "Parabéns, você passou de ano com uma ótima nota!";
  } else if (mediaFinal >= 6) {
    var passou = "Você passou de ano, mas pode melhorar a nota no próximo ano!";
  } else {
    var passou =
      "Você não conseguiu passar de ano, estude mais e você conseguirá passar na recuperação!";
  }

  alert(
    `O aluno ${aluno} tirou no \n 1º Trimestre a nota: ${n1} \n 2º Trimestre a nota: ${n2} \n 3º Trimestre a nota: ${n3} \n Fechando o ano com a média: ${mediaFinal} \n ${passou}`
  );

  var totalAlunos = alunos.push(aluno);

  var totalMedias = medias.push(mediaFinal);

  var dnv = prompt("Quer calcular outra vez? [SIM ou NÃO] ").toLowerCase();
  while (dnv == "") {
    var dnv = prompt("Quer calcular outra vez? [SIM ou NÃO] ").toLowerCase();
  }
}

var mediaAlunos = prompt(
  "Quer ver a média final de cada aluno? [SIM ou NÃO]"
).toLowerCase();
while (mediaAlunos == "") {
  var mediaAlunos = prompt(
    "Quer ver a média final de cada aluno? [SIM ou NÃO]"
  ).toLowerCase();
}

if (mediaAlunos === "sim") {
  for (var a = 0; a < alunos.length; a++) {
    alert(`${alunos[a]}: ${medias[a]}`);
  }
  alert("Obrigado por usar a calculadora de médias");
} else if (mediaAlunos === "não") {
  alert("Obrigado por usar a calculadora de médias");
} else {
  alert("Responde com Sim ou Não");
  var mediaAlunos = prompt(
    "Quer ver a média final de cada aluno? [SIM ou NÃO]"
  ).toLowerCase();
  while (mediaAlunos == "") {
    var mediaAlunos = prompt(
      "Quer ver a média final de cada aluno? [SIM ou NÃO]"
    ).toLowerCase();
  }
  if (mediaAlunos === "sim") {
    for (var a = 0; a < alunos.length; a++) {
      alert(`${alunos[a]}: ${medias[a]}`);
    }
    alert("Obrigado por usar a calculadora de médias");
  } else {
    alert("Obrigado por usar a calculadora de médias");
  }
}

