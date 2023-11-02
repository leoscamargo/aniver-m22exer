AOS.init();

const dataDoEvento = new Date("Dec 10, 2023 23:00:00");
const timeStampDoEvento = dataDoEvento.getTime();

const contaAsHoras = setInterval(function(){
    const agora = new Date();
    const timeStampAtual = agora.getTime();

    const distanciaEvento = timeStampDoEvento - timeStampAtual;

    const diasEmMs = 1000 * 60 * 60 * 24;
    const horaEmMs = 1000 * 60 * 60;
    const minutoEmMs = 1000 * 60;

    const diasAteOEvento = Math.floor(distanciaEvento / diasEmMs);
    const horasAteOEvento = Math.floor((distanciaEvento % diasEmMs) / horaEmMs);
    const minutosAteOEvento = Math.floor((distanciaEvento % horaEmMs) / minutoEmMs);
    const segundoAteOEvento = Math.floor((distanciaEvento % minutoEmMs) / 1000);

    document.getElementById('contador').innerHTML = `${diasAteOEvento}d ${horasAteOEvento}h ${minutosAteOEvento}m ${segundoAteOEvento}s`
}, 1000);