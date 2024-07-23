document.getElementById("formularioLoja").addEventListener("submit",function(event){
  event.preventDefault();

  const nomeLoja = document.getElementById("nomeLoja").value;
  const cidade = document.getElementById("cidade").value;
  const vendasTotais = document.getElementById("vendasTotais");
  const resultadoDiv = document.getElementById("resultado");

  resultadoDiv.textContent='';

  try{
    if(!nomeLoja || !cidade || !vendasTotais){
      throw new Error('Todos os campos devem estar preenchidos!');
    }
    if(vendasTotais < 0){
      throw new Error('Ovalor de vendas do mês devem ser maior ou igual a zero!')
    }

    resultadoDiv.textContent = 'cadastro realizado com sucesso!';
    resultadoDiv.style.color = 'green';
  }catch (error) {
    resultadoDiv.textContent = error.message;
    resultadoDiv.style.color = 'red';
  } finally {
    console.log('Validação do formulário concluida!')
  }

})