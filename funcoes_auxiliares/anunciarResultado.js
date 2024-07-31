module.exports = heroi => {
  // Os 2 possíveis resultados são VITÓRIA ou GAME OVER
  if (heroi.vida > 0) {
    console.log(`-----------------`);
    console.log("--- Resultado ---");

    console.log(`VITÓRIA!`);
    console.log(`PARABÉNS ${heroi.nome.toUpperCase()}!!!`);
    console.log(`-----------------`);
    console.log();
  } else {
    console.log(`-----------------`);
    console.log("--- Resultado ---");

    console.log(`    GAME OVER!    `);
    console.log(`-----------------`);

    console.log();
  }
};
