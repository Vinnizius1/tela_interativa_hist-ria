const Personagem = require("./personagem");

class Heroi extends Personagem {
  // arma fará parte do objeto, mas não do construtor
  arma = "";

  constructor(vida, nome, fome, forca, habilidade) {
    super(vida);

    this.nome = nome;
    this.fome = fome;
    this.forca = forca;
    this.habilidade = habilidade;
    // this.arma = "";
  }

  // Método que oferece 3 opções para exibir o status
  exibirStatus(opcao) {
    switch (opcao) {
      case "1":
        console.log(`Nome: ${this.nome}`);
        console.log(`Vida: ${this.vida}%`);
        console.log(`Fome: ${this.fome}%`);
        console.log(`Força: ${this.forca}%`);
        console.log(`Habilidade: ${this.habilidade}`);
        console.log(`Arma: ${this.arma}`);
        break;

      case "2":
        console.log(`Vida: ${this.vida}%`);
        console.log(`Força: ${this.forca}%`);
        break;

      case "3":
        console.log(`Habilidade: ${this.habilidade}`);
        console.log(`Arma: ${this.arma}`);
        break;

      default:
        console.log("Apertou qualquer tecla: Pulando...");
    }
  }

  /*   // Restaura a fome
  alimentar(fome) {
    this.fome = fome;
  }

  // Restaura a vida
  curar(vida) {
    this.vida = vida;
  }
 */
  // Método "atacar" da classe filha Herói é um pouco diferente da classe pai Personagem (polimorfismo)
  atacar() {
    return Math.floor(Math.random() * (this.vida + this.forca));
  }

  // Aqui a classe pai lida com a lógica de defesa inicial mas quero garantir que a classe Heroi e a classe Vilao compartilhem a funcionalidade de defesa comum
  defender(golpe) {
    super.defender(golpe); // Reduz a vida
    this.forca -= golpe; // Reduz a força, específico do herói
  }
}

module.exports = Heroi;
