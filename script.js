var meuFormulario = document.getElementById("formulario");
meuFormulario.addEventListener("submit", function(event) {
  event.preventDefault();

//chamar a  function ehQuadradoPerfeito
 ehQuadradoPerfeito();

});
//fumction ehQuadradoPerfeito
function ehQuadradoPerfeito(numero) {
if (numero < 0) {
  return false;

// Usa a propriedade matemática de que o quadrado de um número inteiro é igual à raiz quadrada desse número
// Se a raiz quadrada é um número inteiro, então o número é um quadrado perfeito
  var raiz = Math.sqrt(numero);

//Captura o que está dentro do primeiro input no formulário
//Number - Transforma o texto capturado em Numero
    var numero = parseInt(prompt("Digite um número para verificar se é um quadrado perfeito:"));
    if (ehQuadradoPerfeito(numero)) {
    let primeiro_numero_inteiro = Number(document.getElementById("primeiro_numero_inteiro").value);
      console.log(numero + " é um quadrado perfeito.");
}     else {
  console.log(numero + " não é um quadrado perfeito.");
  //Aqui vai escrever no input "resultado" o valor que está armazenado na variável "resultado"
  document.getElementById("resultado").value = resultado_soma;
}

}
