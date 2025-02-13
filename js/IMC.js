
function calcularIMC() {
    let peso = parseFloat(document.getElementById("peso").value);
    let altura = parseFloat(document.getElementById("altura").value);
    let resultado = document.getElementById("resultado");

    if (isNaN(peso) || isNaN(altura) || peso <= 0 || altura <= 0) {
        resultado.innerHTML = "Por favor, insira valores válidos.";
        resultado.style.color = "red";
        return;
    }

    let imc = peso / (altura * altura);
    let classificacao = "";
    
    if (imc < 18.5) {
        classificacao = "Magreza";
    } else if (imc >= 18.5 && imc < 25) {
        classificacao = "Peso normal";
    } else if (imc >= 25 && imc < 30) {
        classificacao = "Sobrepeso";
    } else if (imc >= 30 && imc < 34.9) {
        classificacao = "Obesidade Grau 1";
    } else if (imc >= 35 && imc < 39.9) {
        classificacao = "Obesidade Grau 2";
    } else if (imc >= 40) {
        classificacao = "Obesidade Grau 3 (Mórbida)";
    }

    // Exibe o valor do IMC junto com a classificação
    resultado.innerHTML = `Seu IMC é ${imc.toFixed(2)} e a classificação é: ${classificacao}`;
    resultado.style.color = "#333";
}
      
