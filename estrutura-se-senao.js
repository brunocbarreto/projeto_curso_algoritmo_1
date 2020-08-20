function acaoBotao() {
    var valor01, valor02, resultado, operacao

   valor01 = prompt("Digite o primeiro valor:")
   operacao = prompt("Digite a operação: Ex: - , +, *, /")
   valor02 = prompt("Digite o segundo valor:")

   if(operacao == "+"){
       resultado = parseFloat(valor01) + parseFloat(valor02) 
   }else if(operacao == "-"){
       resultado = parseFloat(valor01) - parseFloat(valor02) 
   }else if(operacao == "*"){
       resultado = parseFloat(valor01) * parseFloat(valor02) 
   }else if(operacao == "/"){
       resultado = parseFloat(valor01) / parseFloat(valor02) 
   }  

   document.getElementById("paragrafo").innerText = "O resultado do cálculo é : " + resultado
}

