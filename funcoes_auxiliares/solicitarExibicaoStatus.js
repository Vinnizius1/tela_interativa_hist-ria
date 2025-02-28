const prompt = require("prompt-sync")({ sigint: true });

// Variável guardada fora da função para manter o seu valor sempre atualizado corretamente
let numeroDoProximoAto = 1;

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

  /* Início do loop (enquanto "true") */
  do {
    opcao = prompt(
      `Digite a opção desejada (1, 2, 3), ou qualquer outra ENTER para "PULAR": `
    );

    console.log();

    // Array com as opções válidas
    const opcoesValidas = ["1", "2", "3"];

    // Verifica se existe uma das três opções desse array na variável "opcao"
    if (opcoesValidas.includes(opcao)) {
      console.log(`Você escolheu a opção ${opcao}.`);

      // Confirmação
      const confirmacao = prompt(`Confirma? (sim/nao): `);

      // "if" para confirmar o "sim" e então exibir novamente o status
      if (confirmacao.toLowerCase() === "sim") {
        console.log();

        // Mostra o status
        heroi.exibirStatus(opcao);

        console.log();

        // Simples prompt
        prompt("Pressione ENTER para continuar...");

        console.log();

        // Esta frase será exibida optou por "sim" e está no 3º Ato
        numeroDoProximoAto = 3 ? console.log("Fim do Ato 3!") : null;

        break; // Sai do loop se a confirmação for positiva
      }
    } else if (numeroDoProximoAto === 3) {
      console.log("Fim do Ato 3!");

      break;
    } else {
      console.log(`Pulando para o "${(numeroDoProximoAto += 1)}º Ato"!`);

      break;
    }

    // Enquanto não chegar no "break", haverá o loop
  } while (true);
}

module.exports = solicitarExibicaoStatus;
