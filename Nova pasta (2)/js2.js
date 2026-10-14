{alert("CALCULADORA")}
let numero1 = Number(prompt("Digite o primeiro numero: "))
let numero2 = Number(prompt("Digite o segundo numero: "))
let operacao = prompt("Informe a operação:\n Soma [+] \n Subtração [-] \n Divisão [/] \n Multiplicação [*]")
if (operacao == "+")
{alert(numero1+numero2)}
else if (operacao == "-")
{alert(numero1-numero2)}
else if (operacao == "/")
{alert(numero1/numero2)}
else if (operacao == "*")
{alert(numero1*numero2)}
else
{alert("Essa não é uma operação válida")}