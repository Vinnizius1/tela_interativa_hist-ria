const Personagem = require("./personagem");

class Vilao extends Personagem {
  constructor(vida, ataqueEspecial) {
    super(vida);

    this.ataqueEspecial = ataqueEspecial;
  }

  ataqueEsp() {
    return this.ataqueEspecial;
  }

  // Método "atacar" da classe Vilao é herdado do pai Personagem
  atacar() {
    return super.atacar();
  }

  // Método "defender" da classe Vilão é herdado também
  defender(golpe) {
    super.defender(golpe);
  }
}

module.exports = Vilao;
