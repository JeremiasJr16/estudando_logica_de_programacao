var notaDoPrimeiroBimestre = 9;
var notaDoSegundoBimestre = 6;
var notaDoTerceiroBimestre= 8;
var notaDoQuartoBimestre = 2;

var somaDasNotas = notaDoPrimeiroBimestre + notaDoSegundoBimestre + notaDoTerceiroBimestre + notaDoQuartoBimestre;
 
console.log(somaDasNotas)

var mediaDasNotas = somaDasNotas/4 ;
var notaExata= mediaDasNotas.toFixed(1)

console.log(notaExata)

function mensagemDeAprovacao(frase){
  if (notaExata => 6){
  console.log = ('Passou')
}
}
