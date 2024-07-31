const prompt = require("prompt-sync")({ sigint: true });

//Importação das funções auxiliares e do 3º Ato, que dependerá de existir de acordo com a "vida" do herói
const terceiroAto = require("../atos/terceiroAto");
const solicitarExibicaoStatus = require("../funcoes_auxiliares/solicitarExibicaoStatus");
const anunciarResultado = require("../funcoes_auxiliares/anunciarResultado");

// Traz o objeto heroi e o vilão fraco
// const heroi = require("../classes/heroi");

// Variável que trará novas falas de acordo com o progresso dos turnos de combate
let ordemDoAtaqueHeroi = 0;

// Marcará o número de turnos de combate
let turno = 1;

/* Exportação da função de combate */
module.exports = (heroi, vilaoFraco) => {
  // O combate durará até que a vida de alguém chegue a 0
  while (heroi.vida > 0 && vilaoFraco.vida > 0) {
    console.log();

    console.log(`*** ${turno}º turno ***`);

    console.log();

    // Atualiza o número do turno do combate
    turno += 1;

    /* 1º ATAQUE - VEM DO HERÓI */
    let golpeDoHeroi = heroi.atacar();
    console.log(
      `Armado com ${heroi.arma}, ${heroi.nome} acerta o Zombador, que sofre ${golpeDoHeroi} de dano!`
    );

    // Se pela 2ª vez o HERÓI atacar o ZOMBADOR, então, ele terá uma "nova fala"
    if (ordemDoAtaqueHeroi === 1) {
      console.log();
      console.log(`"Você já era!" Diz ${heroi.nome}.`);
      console.log();
      console.log(`"É o que veremos..." responde Zombador, quase sem força.`);
    }

    // Controle do número de vezes que o herói ataca o vilão
    ordemDoAtaqueHeroi++;

    // VILÃO se defende
    vilaoFraco.defender(golpeDoHeroi);

    console.log();

    // Mostra a vida atual do vilão
    console.log(
      `Vida do vilão: ${
        vilaoFraco.vida <= 0 ? (vilaoFraco.vida = 0) : vilaoFraco.vida
      }`
    );

    console.log();

    prompt("Pressione uma ENTER para continuar");

    console.log();

    /* GRANDE CONDIÇÕES DE IF´S */
    /* 2º ATAQUE - VEM DO VILÃO SE ESTIVER VIVO */
    if (vilaoFraco.vida > 0) {
      let golpeDoVilao = vilaoFraco.atacar();

      console.log();

      console.log(
        `Zombador ataca ${heroi.nome}, e causa ${golpeDoVilao} de dano!`
      );

      console.log();

      heroi.defender(golpeDoVilao);

      // Mostra a vida atual do herói
      console.log(
        `Vida do herói: ${heroi.vida <= 0 ? (heroi.vida = 0) : heroi.vida}`
      );

      console.log();

      // Se o herói estiver VIVO, haverá PRÓXIMO TURNO
      if (heroi.vida > 0) {
        prompt("Pressione uma ENTER para próximo turno!");
      } else {
        // Se o herói MORREU, exibição do GAME OVER
        anunciarResultado(heroi);

        console.log();
      }
    } else {
      // Se o vilão morreu, teremos a chamada as funções
      anunciarResultado(heroi);
      solicitarExibicaoStatus(heroi);
      terceiroAto(heroi);
    }
  }
};
