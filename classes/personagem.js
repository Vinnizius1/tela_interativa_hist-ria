class Personagem {
  constructor(vida) {
    this.vida = vida;
  }

  // Ambos personagens terão "atacar" e "defender"
  atacar() {
    return Math.floor(Math.random() * this.vida);
  }

  defender(golpe) {
    this.vida -= golpe;

    // Garantir que "vida" não fique abaixo de 0 se "golpe" atingir um valor maior do que o dela
    /* if (this.vida < 0) {
      this.vida = 0;
    } */
  }
}

module.exports = Personagem;
