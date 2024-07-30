module.exports = heroi => {
  if (heroi.vida <= 0) {
    console.log("--- Resultado ---");
    console.log("GAME OVER!");
  } else {
    console.log("--- Resultado ---");
    console.log(`VITÓRIA! PARABÉNS ${heroi.nome.toUpperCase()}!!!`);
    console.log(`Avançando para o Ato final!`);

    // Condição para que o herói avance para o 3º e último Ato
    return true;
  }
};
