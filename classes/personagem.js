class Personagem {
  constructor(vida) {
    this.vida = vida;
  }

  // ambos personagens têm:
  atacar() {
    console.log("ataque");
  }
  defender() {
    console.log("defender");
  }
}

module.exports = Personagem;
