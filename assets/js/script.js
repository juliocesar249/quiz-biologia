import { corrige } from './perguntas.js'

const form = document.querySelector('#formulario');

const validaRespostas = e =>  {
    e.preventDefault();

    const respostasDoUsuario = e.target.querySelectorAll('input:checked');
    
    if(respostasDoUsuario.length < 6) {
        alert('Verifique se respondeu todas as perguntas e tente novamente.');
        return;
    }

    corrige(respostasDoUsuario, e.target);
}

form.addEventListener('submit', e => validaRespostas(e));

form.querySelector('#botaoRefazer').onclick = () => window.location.reload();