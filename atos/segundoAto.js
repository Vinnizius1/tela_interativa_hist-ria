const prompt = require("prompt-sync")({ sigint: true });

// Importa a classe para simular o combate contra o herói
const Vilao = require("../classes/vilao1");

// Importa a função de combate ESPECÍFICA do vilão fraco
const combate = require("../combates/combateVilaoFraco");

// Cria instância do Vilão Fraco
let vilaoFraco = new Vilao(60, 0);

/* // Marcará o número de turnos de combate
let turno = 1; */

/* Função que definirá a luta */
// combate();

/* Exportação do 2º Ato trazendo a importação do objeto heroi */
module.exports = heroi => {
  console.clear();
  console.log(`
-------
2º Ato
-------
`);

  // Introdução do ambiente
  console.log(
    `Após alguns dias de viagem, ${heroi.nome} se encontra perto do seu destino.
    
Mas, a sua alegria durou muito muito pouco... um vilão, chamado Zombador, que rodeava aquela cidade, protegendo o castelo principal, parou a sua frente! E disse em um tom de deboche:

"Quem você pensa que é em vir aqui e desafiar o meu chefe?
Pensa que conseguirá algum êxito nesta missão?
Não sabe que a princesa estará para sempre presa?".`
  );
  console.log();
  console.log(`${heroi.nome} por um instante pára, sem saber o que fazer ou o que dizer contra aquela afronta, pois não sabia quem era aquele vilão e também não sabia que o amor da sua vida estava presa e não morta como havia escutado... 
Então, como num lampejo de extrema coragem, ele diz ao Zombador:
    
"Você já era!!!"

E partiu para a luta pegando o vilão de surpresa!`);
  console.log();

  // Função de COMBATE
  combate(heroi, vilaoFraco);

  console.log();
};
