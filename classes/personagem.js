class Personagem {
  constructor(vida) {
    this.vida = vida;
  }

  // ambos personagens têm:
  atacar() {
    console.log("ataque da classe Personagem");
  }
  defender() {
    console.log("defender da classe Personagem");
  }
}

module.exports = Personagem;
