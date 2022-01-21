const prompt = require('prompt-sync')();
console.clear();

console.log('SEJA BEM-VINDO(A) AO DESAFIO!!');
console.log();
const pers = prompt('Digite um nome para o seu personagem: ');

console.log('-------------');
console.log(`Olá ${pers}, meu nome é Takbar, sou chefe dos engenheiros. Quero lhe apresentar a Terra dos Anões! A partir
de hoje você se junta a nós, a pedido do Rei Tossla, para sairmos em busca de um terreno para escavar uma nova cidade.
Nós anões, somos especialistas em escavações e temos todos os recursos necessários para isso, mas como você é um(a) novato(a)
vou te explicar como funciona... Sempre antes de sair em busca de terrenos, conferimos nossos equipamentos (pás, picaretas
e dinamites) e armas, porque já encontramos muitos animais selvagens que nos atacaram. Despois de encontramos o local,
montamos acampamento o mais rapido possivel e ali nos instalamos durante todo o tempo necessário para a escavação.`);
console.log('-------------');

console.log("Estamos saindo em busca de um novo terreno, mas antes de sair, temos que conferir todos os equipamentos, pegou suas armas e picaretas?")
let pg1 = prompt('Sim ou Não? ');
const pg1Upper = pg1.toUpperCase()
console.log("Recebemos noticias de um anão explorador de que o terreno ideal está no leste. Logo mais está uma manada de javalis que sempre causa problemas. Devemos evitá-los?")
let pg2 = prompt('Sim ou Não? ');
const pg2Upper = pg2.toUpperCase()
console.log("Logo a frente tem um rio, aproveitamos para encher nossos cantis. Infelizmente o rio é muito fundo para anões. Devemos contorná-lo?")
let pg3 = prompt('Sim ou Não? ');
const pg3Upper = pg3.toUpperCase()
console.log("Finalmente chegamos ao terreno de escavação, mas está escurecendo já. Devemos montar acampamento?")
let pg4 = prompt('Sim ou Não? ');
const pg4Upper = pg4.toUpperCase()
console.log("Verificamos o solo e notamos que há bolsões de água do lado norte do terreno, há riscos de desabamento caso a escavação seja feita daquele lado?")
let pg5 = prompt('Sim ou Não? ');
const pg5Upper = pg5.toUpperCase()

let x = 0

if (pg1Upper == 'SIM') {
    x = x+1
} if (pg2Upper == "SIM") {
    x = x+1
} if (pg3Upper == "SIM") {
    x = x+1
} if (pg4Upper == "SIM") {
    x = x+1
} if (pg5Upper == "SIM") {
    x = x+1
}

if (x == 0){
    console.log('Você falhou miseravelmente em ajudar os anões a construir a nova cidade!!')
} if (x == 1 || x == 2) {
    console.log('A cidade foi construida mas não graças a você!')
} if (x == 3) {
    console.log('Você até tentou ajudar, mas não foi o suficiente!')
} if (x == 4) {
    console.log('Sua ajuda foi considerável, mas o trabalho não ficou perfeito!')
} if (x == 5) {
    console.log('Os anões gostaram tanto do seu trabalho que deram à cidade o seu nome. Parabéns!!')
}