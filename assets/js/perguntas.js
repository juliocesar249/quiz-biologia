export const corrige = (respostasDoUsuario, form) => {
    fetch('./assets/js/db/db.json')
    .then(resposta => resposta.json())
    .then(respostasCorretas => {
        let i = 0;
        let respostasCorretasQuantidade = 0;
        respostasDoUsuario.forEach(resposta => {
            i++;

            if(resposta.id === respostasCorretas[i]) {
                resposta.parentElement.classList.add('certo');
                respostasCorretasQuantidade++;
                return;
            } else {
                resposta.parentElement.classList.add('errado');
                return;
            }

        });

        mostraResultado(respostasCorretasQuantidade, respostasDoUsuario.length, form);
    })
    .catch(erro => console.error(erro));
}

const mostraResultado = (respostasCorretasQuantidade, quantidadeDeRespostas, form) => {
    form.innerHTML += `
        <p class="mensagem">Você acertou ${respostasCorretasQuantidade} de ${quantidadeDeRespostas}</p>
    `

    form.querySelector('#botaoCorrigir').classList.add('desativado');
    form.querySelector('#botaoRefazer').classList.remove('desativado');
    form.querySelectorAll('fieldset').forEach(elemento => elemento.setAttribute('disabled', ''))
}
