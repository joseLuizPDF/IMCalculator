// Função que valida se a altura é um número válido
function validarAltura(altura) {
    if (isNaN(altura)) {
      return false;
    }
    return true;
  }
  
  // Função que calcula o IMC
  function calcularIMC() {
    // Obter os valores de altura e peso do usuário
    const alturaString = document.getElementById("altura").value;
    if (!validarAltura(parseFloat(alturaString))) {
      alert("Por favor, insira uma altura válida usando um ponto ou uma vírgula.");
      return;
    }
    const altura = parseFloat(alturaString.replace(",", "."));
    const peso = parseFloat(document.getElementById("peso").value);
  
    // Calcular o IMC
    const imc = peso / (altura ** 2);
  
    // Exibir o resultado do IMC
    const resultElement = document.getElementById("result");
    resultElement.innerText = `Seu IMC é ${imc.toFixed(2)}`;
  
    // Exibir a classificação do IMC na tabela
    const tabela = document.getElementById("imc-table");
    let classificacao = "";
    let grauObesidade = "";
    if (imc < 18.5) {
      classificacao = "Magreza";
      grauObesidade = "0";
    } else if (imc < 25) {
      classificacao = "Normal";
      grauObesidade = "0";
    } else if (imc < 30) {
      classificacao = "Sobrepeso";
      grauObesidade = "I";
    } else if (imc < 40) {
      classificacao = "Obesidade";
      grauObesidade = "II";
    } else {
      classificacao = "Obesidade grave";
      grauObesidade = "III";
    }
  
    const linhaTabela = tabela.insertRow(-1);
    const classificacaoCell = linhaTabela.insertCell(0);
    const grauObesidadeCell = linhaTabela.insertCell(1);
  
    classificacaoCell.innerText = classificacao;
    grauObesidadeCell.innerText = grauObesidade;
  }