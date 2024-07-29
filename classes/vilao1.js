const Personagem = require("./personagem");

class Vilao extends Personagem {
  constructor(vida, ataqueEspecial) {
    super(vida);
    this.ataqueEspecial = ataqueEspecial;
  }

  ataqueEsp() {
    return this.ataqueEspecial;
  }

  // Método "atacar" da classe Vilão (polimorfismo)
  atacar() {
    return Math.floor(Math.random() * this.vida);
    // console.log(`O vilão atacou o herói, causando ${golpeRealizado} de dano!`);

    // return golpeRealizado;
  }

  // Método "defender" da classe Vilão (polimorfismo)
  defender(golpe) {
    this.vida -= golpe;
    //   console.log(
    //     `O vilão se defende mas sofre ${golpeSofrido} de dano a sua vida!`
    //   );
    //   console.log(`Novo status:
    // Vida: ${this.vida}`);

    //   return golpeSofrido;
  }
}

module.exports = Vilao;
