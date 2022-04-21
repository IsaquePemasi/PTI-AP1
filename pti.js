var insiraGasolina = prompt("Insira o valor da Gasolina");

var insiraAlcool = prompt ("Insira o valor do Alcool");

if (insiraGasolina>70){
  alert("Vale a pena Gasolina");
}else{
  if(insiraGasolina<70){
    alert("vale a pena Álcool")  
  }else{
    if (insiraGasolina==insiraAlcool){
      alert("tanto faz abastecer com um ou outro") 
    }
  }
}

var denovo = prompt("deseja fazer um novo calculo? s/n");
 if(denovo=="s"){
   var insiraGasolina = prompt("Insira o valor da Gasolina");

var insiraAlcool = prompt ("Insira o valor do Alcool");
    if (insiraGasolina>70){
  alert("Vale a pena Gasolina");
}else{
  if(insiraGasolina<70){
    alert("vale a pena Álcool")  
  }else{
    if (insiraGasolina==insiraAlcool){
      alert("tanto faz abastecer com um ou outro") 
    }
  }
}
} if (denovo=="n") {
   alert("Até a próxima");
 }