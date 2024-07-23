function validarDados(dados) {
    try {
        if (dados.nome.trim() === '') {
            throw new Error('O campo Nome não pode estar vazio.');
        }

        if (isNaN(dados.idade)) {
            throw new Error('A idade deve ser um número.');
        }

        if (dados.idade < 18) {
            throw new Error('É necessário ter no mínimo 18 anos.');
        }

        return true;

    } catch (error) {
        console.error('Erro de validação:', error.message);
        return false;
    }
}

document.getElementById('formulario').addEventListener('submit', function(event) {
    event.preventDefault(); 

    const nome = document.getElementById('nome').value;
    const idade = parseInt(document.getElementById('idade').value);

    const dadosFormulario = {
        nome: nome,
        idade: idade
    };

    if (validarDados(dadosFormulario)) {
        alert('Dados válidos. Enviando formulário...');
    } else {
        document.getElementById('nome-error').textContent = '';
        document.getElementById('idade-error').textContent = '';

        if (dadosFormulario.nome.trim() === '') {
            document.getElementById('nome-error').textContent = 'O campo Nome não pode estar vazio.';
        }

        if (isNaN(dadosFormulario.idade)) {
            document.getElementById('idade-error').textContent = 'A idade deve ser um número.';
        } else if (dadosFormulario.idade < 18) {
            document.getElementById('idade-error').textContent = 'É necessário ter no mínimo 18 anos.';
        }
    }
});
