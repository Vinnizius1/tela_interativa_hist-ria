const prompt = require("prompt-sync")({ sigint: true });

//Importação das funções auxiliares
const solicitarExibicaoStatus = require("../funcoes_auxiliares/solicitarExibicaoStatus");
const anunciarResultado = require("../funcoes_auxiliares/anunciarResultado");

// Variável que trará novas falas de acordo com o progresso dos turnos de combate
let ordemDoAtaqueHeroi = 0;

// Marcará o número de turnos de combate
let turno = 1;

/* Exportação da função de combate */
module.exports = (heroi, vilaoChefe) => {
  /* WHILE GIGANTE */
  // O combate durará até que a vida de alguém chegue a 0
  while (heroi.vida > 0 && vilaoChefe.vida > 0) {
    console.log();

    console.log(`*** ${turno}º turno ***`);

    console.log();

    // Atualiza o número do turno do combate
    turno += 1;

    /* 1º ATAQUE - VEM DO HERÓI */
    let golpeDoHeroi = heroi.atacar();

    // Texto será diferente de acordo com a arma
    if (heroi.arma === "espada") {
      console.log(
        `${heroi.nome}, com um golpe preciso de sua espada, acerta o Malvado, que sofre ${golpeDoHeroi} de dano!`
      );
    } else {
      console.log(
        `${heroi.nome} dispara sua flecha com precisão, acertando o Malvado em cheio, que sofre ${golpeDoHeroi} de dano!`
      );
    }

    // Se pela 2ª vez o HERÓI atacar o Malvado, então, ele terá uma "nova fala"
    if (ordemDoAtaqueHeroi === 1) {
      console.log();
      console.log(
        `"Você cairá, Malvado! E salvarei a minha princesa!" - diz ${heroi.nome}.`
      );
      console.log();
      console.log(
        `"Quem você pensa que é!" - responde Malvado, cheio de raiva e dor ao mesmo tempo.`
      );
    } else if (ordemDoAtaqueHeroi === 2) {
      console.log();
      console.log(`"Este é o seu FIM!" - diz ${heroi.nome}.`);
      console.log();
      console.log(
        `Malvado, nem consegue responder, apenas murmura quase que inaudivelmente - "Ahh...".`
      );
    }

    // Controle do número de vezes que o herói ataca o vilão
    ordemDoAtaqueHeroi++;

    // VILÃO se defende
    vilaoChefe.defender(golpeDoHeroi);

    console.log();

    // Mostra a vida atual do vilão
    console.log(
      `Vida do vilão: ${
        vilaoChefe.vida <= 0 ? (vilaoChefe.vida = 0) : vilaoChefe.vida
      }`
    );

    console.log();

    // prompt("Pressione uma ENTER para continuar");

    console.log();

    /* ALGUNS DE IF´S */
    /* 2º ATAQUE - VEM DO VILÃO SE ESTIVER VIVO */
    if (vilaoChefe.vida > 0) {
      let golpeDoVilao = vilaoChefe.atacar();

      console.log();

      console.log(
        `Malvado ataca ${heroi.nome}, e causa ${golpeDoVilao} de dano!`
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
        // Se o herói MORREU, exibição do GAME OVER dentro deste ELSE
      } else {
        anunciarResultado(heroi, null, vilaoChefe);

        console.log();

        console.log("Novidades em breve...");
      }
      // Se o vilão morreu, teremos a chamada das funções neste ELSE
    } else {
      anunciarResultado(heroi, null, vilaoChefe);
      solicitarExibicaoStatus(heroi);

      console.log();

      console.log("Novidades em breve...");
    }
  }
};
