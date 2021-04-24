function acionarRelogio(){
    let horaZero = new Date(`2020-01-20T00:00:00`);
    let timer;
    
    const relogioTexto = document.querySelector('.relogio-texto');
    const zerar = document.querySelector('.zerar');
    const iniciar = document.querySelector('.iniciar');
    const pausar = document.querySelector('.pausar');
    
    iniciar.addEventListener('click', () =>{
        let contador = 0;
        timer = setInterval(() => {
            const hora = new Date(horaZero.getTime() + contador);
            contador += 1000;
            let horaTexto = formatarHora(hora.getHours());
            let minutosTexto = formatarHora(hora.getMinutes());
            let segundosTexto = formatarHora(hora.getSeconds());
            relogioTexto.classList.remove('pausado');
            relogioTexto.innerHTML = `${horaTexto}:${minutosTexto}:${segundosTexto}`;
        }, 1000)
    })

    
    pausar.addEventListener('click', () => {
        const relogioTexto = document.querySelector('.relogio-texto');
        const relogioTextoConteudo = relogioTexto.textContent;
        relogioTexto.classList.add('pausado');
        console.log(relogioTextoConteudo);
        horaZero = new Date(`2020-01-20T${relogioTextoConteudo}`);
        clearInterval(timer);
    })


    zerar.addEventListener('click', () => {
        horaZero = new Date(`2020-01-20T00:00:00`);
        let horaTexto = formatarHora(horaZero.getHours());
        let minutosTexto = formatarHora(horaZero.getMinutes());
        let segundosTexto = formatarHora(horaZero.getSeconds());
        relogioTexto.classList.remove('pausado');
        relogioTexto.innerHTML = `${horaTexto}:${minutosTexto}:${segundosTexto}`;
        clearInterval(timer);
    })
}

function formatarHora(valorDeEntrada){
    return valorDeEntrada < 10 ? `0${valorDeEntrada}` : valorDeEntrada;
}

acionarRelogio();