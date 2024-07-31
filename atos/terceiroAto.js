const prompt = require("prompt-sync")({ sigint: true });

// Importa a classe para simular o combate contra o herói
const Vilao = require("../classes/vilao");

// Importa a função auxiliar para mostrar o resultado do combate
// const anunciarResultado = require("../funcoes_auxiliares/anunciarResultado");

// Cria instância do Vilão Fraco
let vilaoBoss = new Vilao(200, 50);

/* INÍCIO DO 3º ATO */
module.exports = heroi => {
  console.clear();

  console.log(`
-------
3º Ato
-------
    `);

  // Introdução do ambiente
  console.log(
    `Após derrotar o vilão Zombador, ${heroi.nome} marcha com ousadia e velocidade até chegar a "Luzeiro", cidade em que o vilão-chefe, Malvado, governa de seu castelo sombrio.
    
    Luzeiro, outrora bela e cheia de vida, se encontra em trevas.
    O centro dessa cidade, referência em negócios e prosperidade, hoje é apenas um montão de ruínas e sofrimento.
    
    Logo, ao chegar no portão principal do castelo de Malvado, ${heroi.nome} grita com todo o ar de seus pulmões:
    
    "Saia daí, seu covarde! Vou derrotá-lo assim como derrotei o Zombador!" 

    Malvado, cheio de raiva replica:

    "Estou aqui! Acabarei com você!"
    `
  );

  // Pausa para ir pro combate
  prompt("Pressione ENTER para ir pro COMBATE FINAL!");

  console.log("combate");
};
