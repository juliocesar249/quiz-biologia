import { corrige } from './perguntas.js'

const form = document.querySelector('#formulario');
const dialog = document.querySelector('.dialog');

const validaRespostas = e =>  {
    e.preventDefault();

    const respostasDoUsuario = e.target.querySelectorAll('input:checked');
    
    if(respostasDoUsuario.length < 6) {
        dialog.classList.toggle('ativo');
        window.setTimeout(() => {
            dialog.classList.toggle('ativo');
        }, 3000);
        return;
    }

    corrige(respostasDoUsuario, e.target);
}

form.addEventListener('submit', e => validaRespostas(e));

form.querySelector('#botaoRefazer').onclick = () => window.location.reload();