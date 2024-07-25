const Personagem = require("./personagem");

// não é necessário criar nenhum método no herói agora, porque já está herdando métodos do PERSONAGEM

class Heroi extends Personagem {
  // moedas fará parte do objeto, mas não do construtor
  moedas = 0;

  constructor(vida, nome, fome, forca) {
    super(vida);
    this.nome = nome;
    this.fome = fome;
    this.forca = forca;
  }

  apresentação() {
    console.log(`Nome: ${this.nome}`);
    console.log(`Vida: ${this.vida}%`);
    console.log(`Fome: ${this.fome}%`);
    console.log(`Força: ${this.forca}%`);
    console.log(`Moedas: $${this.moedas}`);
  }
}

module.exports = Heroi;
