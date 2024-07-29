const prompt = require("prompt-sync")({ sigint: true });

// Importa as classes para simular o combate
const Vilao = require("../classes/vilao1");

// Cria instância do Vilão Fraco
let vilaoFraco = new Vilao(30, 0);

// Função que definirá a luta
function combate(heroi) {
  // HERÓI ataca
  let golpeDoHeroi = heroi.atacar();
  console.log(
    `Armado com ${heroi.arma}, ${heroi.nome} desfere um golpe avassalador e acerta em cheio o Zombador, que sofre ${golpeDoHeroi} de dano!`
  );

  // VILÃO se defende
  vilaoFraco.defender(golpeDoHeroi);
  console.log(`Vida do vilão: ${vilaoFraco.vida}`);
  console.log();
  prompt("Aperte uma tecla para próximo turno!");

  // VILÃO ataca SE estiver vivo
  if (vilaoFraco.vida > 0) {
    let golpeDoVilao = vilaoFraco.atacar();
    console.log();
    console.log(
      `Zombador ataca ${heroi.nome}, e causa ${golpeDoVilao} de dano!`
    );
    console.log();
    heroi.defender(golpeDoVilao);
    console.log(`Vida do herói: ${heroi.vida}`);
    prompt("Aperte uma tecla para próximo turno!");
  }
}

// Exportação do 2º Ato
module.exports = heroi => {
  console.log(`
-------
2º Ato
-------
`);

  // Introdução do ambiente
  console.log(
    `Após alguns dias de viagem, ${heroi.nome} se encontra perto do seu destino.
    
Mas, a sua alegria durou muito muito pouco... um vilão, chamado Zombador, que rodeava aquela cidade, protegendo o castelo principal, parou a sua frente! E disse em um tom de escárnio:

"Quem você pensa que é em vir aqui e desafiar o meu chefe?
Pensa que conseguirá algum êxito nesta missão?
Não sabe que a princesa estará para sempre presa?".`
  );
  console.log();
  console.log(`${heroi.nome} por um instante pára, assustado, sem saber o que fazer ou o que dizer contra aquela afronta, pois não sabia quem era aquele vilão e também não sabia que o amor da sua vida estava presa e não morta como havia escutado... 
Então, como num lampejo de extrema coragem, ele disse ao Zombador:
    
"Você já era!!!"

E partiu para a luta pegando o vilão de surpresa!`);
  console.log();

  // O combate durará até que a vida de alguém chegue a 0
  /*   while (heroi.vida > 0 && vilaoFraco.vida > 0) {
} */
  combate(heroi);

  console.log("Acabou a luta!");
};
