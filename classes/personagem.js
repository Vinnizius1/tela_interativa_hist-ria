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
  }
}

module.exports = Personagem;
