const prompt = require("prompt-sync")({ sigint: true });

//
const solicitarExibicaoStatus = require("../funcoes_auxiliares/solicitarExibicaoStatus");

function primeiroAto(heroi) {
  console.clear();
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
  aplicarConsequencias(atitudeDoHeroi);

  // Consequências dessa atitude
  function aplicarConsequencias() {
    if (atitudeDoHeroi === "1") {
      console.log(
        `${heroi.nome} decidi voltar às pressas para vila.
Logo ao pisar dentro do cercado que delimitava a região, algumas pessoas conhecidas começaram a rir dele, dizendo: "Haha! O maluco voltou correndo após sua insensatez, bem que eu disse!" - então, por um instante, a tristeza o abateu...`
      );
      // Diminui a força do herói
      heroi.forca -= 10;

      console.log();

      console.log("--- Resultado ---");

      console.log(
        `${heroi.nome} perdeu 10 pontos de força. Agora a sua força é ${heroi.forca}.`
      );
      console.log();
    } else {
      console.log(`${heroi.nome} decidi pedir ajuda ao seu grande amigo de infância, chamado Fiel.
Prontamente ele se dispõe, e traz não apenas o odre com a melhor água de poço, gelada e cristalina, mas também um alforje carregado de frutas e cereais para seu mantimento durante a jornada.
"Muito obrigado, meu amigo!" - disse ${heroi.nome}, então Fiel respondeu: "De nada, estou muito feliz por você, continue firme! Seguirei o seu exemplo, logo será a minha vez!"`);
      // Aumenta a força do herói
      heroi.forca += 10;
      // Diminui a fome do herói
      heroi.fome -= 10;

      console.log();

      console.log("--- Resultado ---");

      console.log(
        `${heroi.nome} ganhou 10 pontos de força e diminui 10 de fome. Agora a sua força é ${heroi.forca} e fome ${heroi.fome}.`
      );

      console.log();
    }
  }

  //
  solicitarExibicaoStatus(heroi);
}

module.exports = primeiroAto;
