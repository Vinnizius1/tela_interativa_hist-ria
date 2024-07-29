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

  // Restaura a fome
  alimentar(fome) {
    this.fome = fome;
  }

  // Restaura a vida
  curar(vida) {
    this.vida = vida;
  }

  // Método "ataque" da classe Herói (polimorfismo)
  atacar() {
    return Math.floor(Math.random() * (this.vida + this.forca));
    // console.log(
    //   `O herói ${this.nome} atacou e causou ${golpeRealizado} de dano!`
    // );

    // return golpeRealizado;
  }

  // Método "defender" da classe Herói (polimorfismo)
  defender(golpe) {
    this.vida -= golpe;
    this.forca -= golpe;
    //   console.log(
    //     `O herói ${this.nome} se defendeu, mas sofreu ${golpeSofrido} de dano a sua vida e a sua força!`
    //   );
    //   console.log(`Novo status:
    // Vida: ${this.vida}
    // Força: ${this.forca}`);

    //   return golpeSofrido;
  }
}

module.exports = Heroi;
