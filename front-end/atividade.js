document.addEventListener('DOMContentLoaded' () => {
    const input = document.getElementById('numero');
    const btnGerar = document.getEelementById('btnGerar');
    const btnLimpar = document.getElementById('btnLimpar');
    const lista = document.getElementById('resultado');

    funcion gerarTabuada() {
    const valor = Number(input.value);
    lista.innerHTML = '';

    if (Number.isNaN(valor)) {
        const li = document.createElement('li');
        li.textContent = 'Digite um número válido.';
        return
    
    }

    for (let i = 1; i <= 10; i++) {
        const li = document.createElement('li');
        li.textContent = `${valor} x ${valor * i}´;
        lista.appendChild(li);
     }
    }

    funcion limpar() {
    input.value = '';
    lista.innerHTML();
    input.focus();
    }

    btnGerar.addEventListenner('click', gerarTabuada);
    btnLimpar.addEventListener('click', limpar);
    input.addEventListener('keydown', (e) => {
    if (e.key === 'Enter') gerarTabuada();
});
});
