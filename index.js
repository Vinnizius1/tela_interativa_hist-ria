const prompt = require("prompt-sync")({ sigint: true });

const Heroi = require("./classes/heroi");
const Vilao = require("./classes/vilao1");

/* INTRODUÇÃO DO JOGO */
console.log();
console.log(">>>NOME DO JOGO<<<");
console.log();
console.log(
  "Bem-vindo jogador, este é o seu jogo de aventura e ação! As suas atitudes importarão e um bom número sorteado no dado também... prepare-se!"
);
console.log();
console.log(
  "Mas primeiro, precisamos criar o seu personagem, ou melhor, o seu herói que salvará a si mesmo e a sua princesa amada."
);
console.log();

/* INTRODUÇÃO/CRIAÇÃO DO PERSONAGEM COM NOME E HABILIDADE ÚNICA */
console.log("APRESENTAÇÃO DO PERSONAGEM");

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

// Variável que terá o 'nome' retornado da função de validação
const nomeDoHeroi = obterNomeValido();
console.log();

// Explicação sobre as 2 habilidades disponíveis no jogo
console.log(
  `Certo, ${nomeDoHeroi}! Agora, em qual habilidade ele mais se destacará? \n`
);
console.log("1. Força - você terá 100 de nível 'força' e 70 de nível 'vida'");
console.log(
  "*Força* é importante principalmente para combates a curta distância, além de outras vantagens ao longo da história...\n"
);
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

// Função que retornará a "criação do objeto herói"
function criarHeroi(nome, habilidade) {
  // variáveis que se alterarão de acordo com a escolha da "habilidade" feita pelo usuário
  let vida, forca;
  if (habilidade === "Força") {
    vida = 70;
    forca = 100;
  } else {
    vida = 100;
    forca = 70;
  }
  // Aqui retornamos o "heroi" criado de acordo com a habilidade escolhida
  return new Heroi(vida, nome, 100, forca, habilidade);
}

// Atribuição do objeto/instância da classe Heroi
let heroi = criarHeroi(nomeDoHeroi, habilidadeEscolhida);
console.log();
console.log("Herói criado com sucesso!");
heroi.status();
console.log();

console.log(
  `${nomeDoHeroi}, como era conhecido, sabendo dos riscos dessa longa aventura, quis se preparar para a viagem decidindo levar junto de si: `
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

console.log(`Arma '${armaEscolhida}' adicionada!\n`);
heroi.status();
console.log();

/* INÍCIO DA HISTÓRIA */
console.log(
  "O ano era 500 d.C., quando os reis eram respeitados por sua bravura e, acima de tudo, justiça..."
);
console.log(
  "Não muito distante das terras áridas chamadas 'Sequidão', um jovem nenhum, de uma simples e pequena vila, 'Pequenez', decidiu mudar a sua vida de uma forma radical e inesperada: tomou rumo pela estrada chamada 'Estreita', uma estrada muito, muito perigosa..."
);
