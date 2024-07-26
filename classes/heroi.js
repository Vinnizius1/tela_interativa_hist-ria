const Personagem = require("./personagem");

class Heroi extends Personagem {
  // moedas e arma farão parte do objeto, mas não do construtor
  moedas = 0;
  arma = "";

  constructor(vida, nome, fome, forca, habilidade) {
    super(vida);
    this.nome = nome;
    this.fome = fome;
    this.forca = forca;
    this.habilidade = habilidade;
    // this.arma = "";
  }

  status() {
    console.log(`Nome: ${this.nome}`);
    console.log(`Vida: ${this.vida}%`);
    console.log(`Fome: ${this.fome}%`);
    console.log(`Força: ${this.forca}%`);
    console.log(`Habilidade especial: ${this.habilidade}`);
    console.log(`Arma: ${this.arma}`);
    console.log(`Moedas: $${this.moedas}`);
  }

  // Métodos para restaurar o herói
  // Restaura a fome
  alimentar(fome) {
    this.fome = fome;
  }

  // Restaura a vida
  curar(vida) {
    this.vida = vida;
  }
}

module.exports = Heroi;
