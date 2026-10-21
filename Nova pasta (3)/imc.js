let peso = Number(prompt("Digite seu peso em (KG)"))
let altura = Number(prompt("Digite sua altura em (m)"))

function calcularIMC(peso, altura){
    return peso / (altura*altura)
} 
let IMC = calcularIMC(peso, altura)

function classificarIMC(IMC){
    if(IMC < 18,.5){
        return "abaixo do peso."
    }
    else if(IMC >= 18.5 , IMC >= 24.9 ){
        return "com o peso normal"
    }
    else if(IMC >= 25 , IMC >= 29.9 ){
        return "com sobrepeso."
    }
    else if(IMC >= 30 , IMC >= 34.9 ){
        return "com obesidade grau I."
    }
    else if(IMC >= 35 , IMC >= 40 ){
        return "com obesidade grau II."
    }
else if (IMC > 40){
    return "com obesidade grau III."
}
}

let classificacao = calcularIMC(IMC)

function gerarRelatorio(classificacao){
console.log("Voce esta " + classificacao)
}