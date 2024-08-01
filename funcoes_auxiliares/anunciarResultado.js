module.exports = (heroi, vilaoFraco, vilaoForte) => {
  // Os 2 possíveis resultados são VITÓRIA ou GAME OVER no caso
  if (heroi.vida > 0) {
    console.log(`-----------------`);
    console.log("--- Resultado ---");
    console.log();
    vilaoFraco
      ? console.log(`VITÓRIA sobre o vilão Zombador!`)
      : console.log(`VITÓRIA FINAL sobre o vilão-chefe Malvado!
ACABOU COM ELE!!!`);

    // console.log(`VITÓRIA!`);
    console.log();
    console.log(`PARABÉNS ${heroi.nome.toUpperCase()}!`);
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
