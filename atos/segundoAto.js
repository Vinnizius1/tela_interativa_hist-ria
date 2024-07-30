const prompt = require("prompt-sync")({ sigint: true });

// Importa a classe para simular o combate contra o herói
const Vilao = require("../classes/vilao1");

// Importa a função auxiliar para mostrar o resultado do combate
const anunciarResultado = require("../funcoes_auxiliares/anunciarResultado");

// Cria instância do Vilão Fraco
let vilaoFraco = new Vilao(10, 0);

// Número de turnos
let turno = 1;

/* Função que definirá a luta */
function combate(heroi) {
  // HERÓI ataca
  let golpeDoHeroi = heroi.atacar();
  console.log(
    `Armado com ${heroi.arma}, ${heroi.nome} desfere um golpe avassalador e acerta em cheio o Zombador, que sofre ${golpeDoHeroi} de dano!`
  );

  // VILÃO se defende
  vilaoFraco.defender(golpeDoHeroi);
  console.log();
  console.log(
    `Vida do vilão: ${
      vilaoFraco.vida < 0 ? (vilaoFraco.vida = 0) : vilaoFraco.vida
    }`
  );
  console.log();
  prompt("Pressione uma tecla para continuar");

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
    console.log();
    prompt("Pressione uma tecla para próximo turno!");
  }
}

/* Exportação do 2º Ato */
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
    
Mas, a sua alegria durou muito muito pouco... um vilão, chamado Zombador, que rodeava aquela cidade, protegendo o castelo principal, parou a sua frente! E disse em um tom de escárnio:

"Quem você pensa que é em vir aqui e desafiar o meu chefe?
Pensa que conseguirá algum êxito nesta missão?
Não sabe que a princesa estará para sempre presa?".`
  );
  console.log();
  console.log(`${heroi.nome} por um instante pára, assustado, sem saber o que fazer ou o que dizer contra aquela afronta, pois não sabia quem era aquele vilão e também não sabia que o amor da sua vida estava presa e não morta como havia escutado... 
Então, como num lampejo de extrema coragem, ele diz ao Zombador:
    
"Você já era!!!"

E partiu para a luta pegando o vilão de surpresa!`);
  console.log();

  // O combate durará até que a vida de alguém chegue a 0
  while (heroi.vida > 0 && vilaoFraco.vida > 0) {
    console.log(`${turno}º turno`);
    combate(heroi);
    turno += 1;
  }

  console.log();

  // Quando a vida do herói ou do vilão chegar a 0, a luta acabará e chamará esta função para mostrar a mensagem final
  anunciarResultado(heroi) ? terceiroAto(heroi) : console.log("Tente de novo!");

  console.log();

  // Simples prompt final
  prompt("Digite uma tecla para continuar...");
};
