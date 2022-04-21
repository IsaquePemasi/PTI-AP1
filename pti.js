// Alertas iniciais com a temática do PTI
alert("Gasolina ou Álcool?")
alert("Descubra agora!")
// Constantes que serão usadas no layout de saída
const cabecalho= "╔════════════════════════════════════════╗";
const divisor ="╠════════════════════════════════════════╣";
const borda = "║";
const rodape = "╚════════════════════════════════════════╝";
// Variáveis do álcool e gasolina (com o valor inicial)
var valAlcool = 0.00;
var valGasolina = 0.00
// Função genérica, para imprimir no console
function print(s) {
console.log(s);
}
// Imprime o cabecalho de saída
function printH(s) {
print(cabecalho);
printL("Posto Ipiranga")
print(divisor);
}
// Imprime o rodape de saída, do layout
function printF(s) {
print(rodape);
}
// Imprime uma linha dentro do layout
function printL(s) {
const l = s + " ".repeat(40 - s.length);
print(borda + l + borda);
}
// Formata um número fixando três casas decimais
function formataNumero(n) {
return n.toFixed(3)
}
// Faz o cálculo para decidir o combustível e retorna a mensagem do combustivel
function decideCombustivel() {
const m = valAlcool / valGasolina;

if (m == 0.7) {
return "Tanto faz um ou outro."
} else if (m > 0.7) {
return "GASOLINA!"
} else if (m < 0.7) {
return "ÁLCOOL!"
}
}
// Imprime o resultado montando a tela de resultado, com o layout do inicio do código
function imprimeDados() {
console.clear();
printH();
printL(" Gasolina: " + formataNumero(valGasolina));
printL(" Alcool: " + formataNumero(valAlcool));
printL("");
printL(" abasteça com: " + decideCombustivel());
printF();
print("");
}
// Solicita o valor do combustivel, garantindo que a resposta seja um número
function solicitaGasolina() {
let s = prompt('Informe o valor da Gasolina: ');
  s = s.replace(",",".");
valGasolina = parseFloat(s);

if (isNaN(valGasolina)) {
  print("Você informou um número inválido. Tente novamente.");
solicitaGasolina();
}
}
// Solicita o valor do combustivel, garantindo que a resposta seja um número
function solicitaAlcool() {
let s = prompt('Informe o valor do Alcool: ');

s = s.replace(",",".");
valAlcool = parseFloat(s);

if (isNaN(valAlcool)) {
print("Você informou um número inválido. Tente novamente.");
solicitaAlcool();
}
}
// Reinicia o programa
function restart() {
const resposta = prompt("Deseja refazer os cálculos? (s/n)");
if (resposta.toLowerCase() == "s") {
start();
} else if (resposta.toLowerCase() != "n") {
print("Resposta inválida. Tente novamente.");
restart();
}
}
// Função com as etapas do programa a serem realizadas.
function start(){
solicitaGasolina();
solicitaAlcool();
imprimeDados();
restart();
}
// Inicia o programa
start();