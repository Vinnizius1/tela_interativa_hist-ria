const prompt = require("prompt-sync")({ sigint: true });

const Heroi = require("./classes/heroi");
const Vilao = require("./classes/vilao1");

/* INTRODUÇÃO DO JOGO */
console.log();
// Nome do jogo
console.log(`"CAMINHO DE LUZ" - Jogo de Texto`);
console.log();
// 1ª apresentação do jogo
console.log(
  "Bem-vindo jogador, este é o seu jogo de aventura e ação! As suas atitudes importarão e um bom número sorteado no dado também... prepare-se!"
);
console.log();
console.log(
  "Mas primeiro, precisamos criar o seu personagem, ou melhor, o seu herói que salvará a si mesmo e a sua princesa amada."
);
console.log();

/* INTRODUÇÃO/CRIAÇÃO DO PERSONAGEM COM NOME E HABILIDADE ÚNICA */
console.log("Apresentação do Personagem");
// Função que validará o nome do herói contra "espaço vazio" e caracteres que não sejam letras
function obterNomeValido() {
  let nomeDoHeroi;
  do {
    nomeDoHeroi = prompt("Diga o nome dele: ");
    if (nomeDoHeroi.trim() === "" || !/^[a-zA-Z\s]+$/.test(nomeDoHeroi)) {
      console.log("Nome só pode conter letras! Tente novamente.");
    } else {
      // Retorna o nome com o 1º caractere sempre maiúsculo
      return nomeDoHeroi.charAt(0).toLocaleUpperCase() + nomeDoHeroi.slice(1);
    }
  } while (true);
}

// Variável que terá o "nome" do herói retornado da função de validação
const nomeDoHeroi = obterNomeValido();

// Construção do objeto herói
let heroi = new Heroi(100, nomeDoHeroi, 70, 100);
console.log();

// Explicação sobre as 2 habilidades disponíveis no jogo
console.log(
  `Certo, ${heroi.nome}! Agora, em qual habilidade ele mais se destacará?`
);
console.log();
console.log("1. Força - você terá 100 de nível 'força' e 70 de nível 'vida'");
console.log(
  "*Força* é importante principalmente para combates a curta distância, além de outras vantagens ao longo da história..."
);
console.log();
console.log(
  "2. Sabedoria - você terá 70 de nível 'força' e 100 de nível 'vida'"
);
console.log(
  "*Sabedoria* coloca você à frente da estratégia no combate, e também te prepara para melhores decisões..."
);

// Função que retornará a habiliade escolhida (forçará o usuário a digitar corretamente)
function obterHabilidadeValida() {
  let habilidadeDoHeroi;
  do {
    habilidadeDoHeroi = prompt("Digite a opção desejada (1 ou 2): ");
    console.log();
  } while (habilidadeDoHeroi !== "1" && habilidadeDoHeroi !== "2");
  return habilidadeDoHeroi;
}
console.log();

// Variáveis que armazenarão o quesito "habilidade"
const habilidadeDoHeroi = obterHabilidadeValida();
const habilidades = ["Força", "Sabedoria"];
const habilidadeEscolhida = habilidades[habilidadeDoHeroi - 1];

// Função que atribuirá a habilidade escolhida
function criaHabilidade(heroi, habilidade) {
  // variáveis que se alterarão de acordo com a escolha da "habilidade" pelo usuário
  let vida, forca;
  if (habilidade === "Força") {
    vida = 70;
    forca = 100;
  } else {
    vida = 100;
    forca = 70;
  }
  // Aqui atribuímos os novos valores (vida, força, habilidade) às propriedades diretamente
  heroi.vida = vida;
  heroi.forca = forca;
  heroi.habilidade = habilidade;
}

// Chamada da função que leva o objeto herói e a habilidade escolhida pelo usuário
criaHabilidade(heroi, habilidadeEscolhida);
console.log();
console.log(
  `Herói criado e habilidade do tipo '${habilidadeEscolhida}' adicionada com sucesso!`
);
console.log();
heroi.status();
console.log();

// Escolha da arma
console.log(
  `${heroi.nome}, como era conhecido, sabendo dos riscos dessa longa aventura, quis se preparar para esta viagem decidindo levar junto de si: `
);
console.log("1. Espada");
console.log("2. Arco e Flecha");

// Função que retornará a arma escolhida (forçará o usuário a digitar corretamente)
function obterArma() {
  let armaDoHeroi;
  do {
    armaDoHeroi = prompt("Digite a opção desejada (1 ou 2): ");
    console.log();
  } while (armaDoHeroi !== "1" && armaDoHeroi !== "2");
  return armaDoHeroi;
}

// Variáveis que armazenarão o quesito "arma"
const armaDoHeroi = obterArma();
const armas = ["Espada", "Arco e Flecha"];
const armaEscolhida = armas[armaDoHeroi - 1];

// Adiciona a arma ao objeto herói
heroi.arma = armaEscolhida; // Atribui a arma escolhida ao atributo arma

console.log(`Arma '${armaEscolhida}' adicionada!`);
console.log();
heroi.status();
console.log();

/* INÍCIO DA HISTÓRIA */
console.log(`
-------
Prólogo
-------
`);
console.log(
  `O ano era 500 d.C., quando os reis eram respeitados por sua bravura e, acima de tudo, justiça...
Não muito distante das terras áridas chamadas 'Sequidão', um jovem costumeiro, de uma simples e pequena vila, 'Pequenez', decidiu mudar a sua vida de uma forma radical e inesperada...
Tomou rumo pela estrada chamada 'Estreita', uma estrada muito, muito perigosa...`
);
console.log();
console.log(
  `Porém, ${heroi.nome} estava decidido, resoluto, firme como uma rocha em prosseguir e jamais retroceder para aquela antiga vida com pouco significado...
"Qual seria o meu propósito?" - perguntava ${heroi.nome},
"Preciso encontrar a minha princesa!" - exclamava em alto e bom som consigo mesmo, afinal estar solteiro já não o agradava mais...`
);
console.log(`
  -------
  1º Ato
  -------
  `);
console.log(
  `Ora, não faziam 2 horas do início de sua caminhada pela estrada Estreita, e ${heroi.nome} se depara com um problema: esquecera o seu odre de água!

O que você fará? `
);
console.log();
console.log(
  "1. Retornar rapidamente para a vila e pegar logo o seu odre, pois logo irá escurecer!"
);
console.log(
  "2. Pedir ajuda ao seu grande amigo que se aproxima retornando para a vila após uma viagem de negócios."
);

// Função que retornará a atitude escolhida
function definirAtitude() {
  let atitudeDoHeroi;
  do {
    atitudeDoHeroi = prompt("Digite a opção desejada (1 ou 2): ");
    console.log();
  } while (atitudeDoHeroi !== "1" && atitudeDoHeroi !== "2");
  return atitudeDoHeroi;
}
console.log();
// Variável que armazenará o resultado da função definirAtitude
const atitudeDoHeroi = definirAtitude();
// Consequências dessa atitude
if (atitudeDoHeroi === "1") {
  console.log(
    `${heroi.nome} decidi voltar às pressas para vila e, logo ao pisar dentro do cercado que delimitava a região, algumas pessoas conhecidas começaram a rir dele, dizendo: "Haha! O maluco voltou correndo após sua insensatez, bem que eu disse!" - então, por um instante, a tristeza o abateu...`
  );
  console.log(heroi.forca);
  // Diminui a força do herói
  heroi.forca -= 10;
  console.log(
    `${heroi.nome} perdeu 10 pontos de força. Agora a sua força é ${heroi.forca}.`
  );
} else {
  console.log(`${heroi.nome} decidi pedir ajuda ao seu grande amigo de infância, chamado Fiel.
Prontamente ele se dispõe, e traz não apenas o odre com a melhor água de poço, gelada e cristalina, mas também um alforje carregado de frutas e cereais para seu mantimento durante a jornada.
"Muito obrigado, meu amigo!" - disse ${heroi.nome}, então Fiel respondeu: "De nada, estou muito feliz por você, continue firme! Seguirei o seu exemplo, logo será a minha vez!"`);
  // Aumenta a força do herói
  heroi.forca += 10;
  heroi.fome += 15;
  console.log(
    `${heroi.nome} ganhou 10 pontos de força e 15 de fome. Agora a sua força é ${heroi.forca} e fome ${heroi.fome}.`
  );
}
prompt("Digite uma tecla para continuar...");
