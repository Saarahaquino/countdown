const formatarDigito = (digito) => `0${digito}`.slice(-2);

const atualizar = (tempo) => {
    const segundos = document.getElementById('segundos');
    const minuntos = document.getElementById('minuntos');
    const horas = document.getElementById('horas');
    const days = document.getElementById('days');

    const qtdSegundos = tempo % 60;
    const qtdMinuntos = Math.floor((tempo % (60 * 60)) / 60);
    const qtdHoras = Math.floor((tempo % (60 * 60 * 24)) / (60 * 60));
    const qtddays = Math.floor(tempo / (60 * 60 * 24));

    segundos.textContent = formatarDigito(qtdSegundos);
    minuntos.textContent = formatarDigito(qtdMinuntos);
    horas.textContent = formatarDigito(qtdHoras);
    days.textContent = formatarDigito(qtddays);
}

const contagemRegressiva = (tempo) => {
    const pararContagem = () => clearInterval(id);

    const contar = () => {
        if (tempo === 0 ){
            pararContagem();
        }
        atualizar (tempo);
        tempo--;
    }
    const id = setInterval(contar,1000);
}

const tempoRestante = () => {
    // 1 de janeiro de 1970
    const dataEvento = new Date ('2020-10-26 20:00:00');
    const hoje = Date.now();
    return Math.floor((dataEvento - hoje) / 1000);
}

contagemRegressiva(tempoRestante());