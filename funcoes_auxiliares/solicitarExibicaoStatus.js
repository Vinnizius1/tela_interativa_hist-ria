const prompt = require("prompt-sync")({ sigint: true });

// Variável guardada fora da função para manter o seu valor sempre atualizado corretamente
let numeroDoProximoAto = 1;

// function solicitarExibicaoStatus(heroi) {
//   console.log(
//     `Deseja exibir seu status?
//       1. Status completo do herói
//       2. Status de vida e de força
//       3. Status de arma e de habilidade`
//   );

//   let opcao = prompt(
//     `Digite a opção desejada (1, 2, 3), ou qualquer outra tecla para "PULAR": `
//   );

//   console.log();

//   const opcoesValidas = ["1", "2", "3"];

//   if (opcoesValidas.includes(opcao)) {
//     heroi.exibirStatus(opcao);
//   } else {
//     console.log(`Pulando para o "${numeroDoProximoAto + 1}º Ato"!`);
//   }
// }

function solicitarExibicaoStatus(heroi) {
  console.log(
    `Deseja exibir seu status?
     1. Status completo do herói
     2. Status de vida e de força
     3. Status de arma e de habilidade`
  );

  console.log();

  // Variável que armazenará a opção digitada pelo usuário
  let opcao;

  do {
    opcao = prompt(
      `Digite a opção desejada (1, 2, 3), ou qualquer outra tecla para "PULAR": `
    );

    console.log();

    // Array com as opções válidas
    const opcoesValidas = ["1", "2", "3"];

    // Verifica se existe uma das três opções desse array na variável "opcao"
    if (opcoesValidas.includes(opcao)) {
      console.log(`Você escolheu a opção ${opcao}.`);
      // Confirmação
      const confirmacao = prompt(`Confirma? (sim/nao): `);

      // Este "if", dentro do "if" pai, é para confirmar o "sim" e então exibir novamente o status
      if (confirmacao.toLowerCase() === "sim") {
        console.log();
        heroi.exibirStatus(opcao);

        break; // Sai do loop se a confirmação for positiva
      }
    } else {
      console.log(`Pulando para o "${(numeroDoProximoAto += 1)}º Ato"!`);

      break;
    }

    // Enquanto não chegar no "break", haverá o loop
  } while (true);
}

module.exports = solicitarExibicaoStatus;
