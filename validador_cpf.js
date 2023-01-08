let cpf = '705.484.450-52';

let cpfLimpo = cpf.replace(/\D+/g, '');

let semDigito = cpfLimpo.slice(0, -2);

let arrayCpf = Array.from(semDigito)

const primeiroDigito = arrayCpf.reduce((somador, elemento, index) => {

    somador += elemento * (arrayCpf.length - (index - 1));
    return somador
}, 0)

const formatPrimeiroDigito = (11 - (primeiroDigito % 11)) > 9 ? 0 : 11 - (primeiroDigito % 11);

let arrayCpfPrimeiroDigito = [...arrayCpf, String(formatPrimeiroDigito)];


const segundoDigito = arrayCpfPrimeiroDigito.reduce((somador, elemento, index) => {
    somador += elemento * (arrayCpfPrimeiroDigito.length - (index - 1));
    return somador
}, 0)


const formatsegundoDigito = (11 - (segundoDigito % 11)) > 9 ? 0 : 11 - (segundoDigito % 11);
let arrayCpfSegundoDigito = [...arrayCpfPrimeiroDigito, String(formatsegundoDigito)]

const cpfValidado = arrayCpfSegundoDigito.join("")

console.log(cpfValidado === cpfLimpo ? "CPF Válido" : "CPF inválido");

