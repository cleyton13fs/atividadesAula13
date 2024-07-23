document.getElementById('calcularButton').addEventListener('click', function() {
  try {
    // Obtém os valores de entrada
    let numerador = parseFloat(document.getElementById('numerador').value);
    let denominador = parseFloat(document.getElementById('denominador').value);

    // Verifica se o denominador é zero
    if (denominador === 0) {
      throw new Error('Não é possível dividir por zero.');
    }

    // Calcula a divisão
    let resultado = numerador / denominador;

    // Exibe o resultado
    document.getElementById('resultado').innerText = `Resultado: ${resultado}`;
  } catch (erro) {
    console.error('Ocorreu um erro:', erro);
    // Trata o erro, por exemplo:
    document.getElementById('resultado').innerText = 'Erro: ' + erro.message;
  }
});
