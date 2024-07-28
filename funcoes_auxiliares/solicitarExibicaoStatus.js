const prompt = require("prompt-sync")({ sigint: true });

function solicitarExibicaoStatus(heroi, numeroDoProximoAto) {
  /* //
  let x;
  //
  console.log(
    `Deseja exibir seu status?
      1. Status completo do herói
      2. Status principal
      3. Status com arma e habilidade`
  );

  let opcao = prompt(
    `Digite a opção desejada (1, 2, 3), ou qualquer tecla para "PULAR": `
  );
  console.log();
  const opcoesValidas = ["1", "2", "3"];
  x = opcoesValidas.includes(opcao)
    ? heroi.exibirStatus(opcao)
    : console.log("Apertou qualquer tecla: Pulando...");

  return x;
} */

  console.log(
    `Deseja exibir seu status?
      1. Status completo do herói
      2. Status principal
      3. Status com arma e habilidade`
  );
  let opcao = prompt(
    `Digite a opção desejada (1, 2, 3), ou qualquer outra tecla para "PULAR": `
  );
  console.log();
  const opcoesValidas = ["1", "2", "3"];
  x = opcoesValidas.includes(opcao)
    ? heroi.exibirStatus(opcao)
    : console.log(`Pulando para o "${numeroDoProximoAto + 1}º Ato"!`);
}

module.exports = solicitarExibicaoStatus;
