class Carro {
  private velocidadeAtual: number = 0;

  constructor(
    public marca: string,
    public model: string,
    private velocidadeMaxima: number = 200,
  ) {}

  private alterarVelocidade(delta: number): number {
    const novaVelocidade = this.velocidadeAtual + delta;
    const velocidadeValida = 0 <= novaVelocidade && novaVelocidade <= this.velocidadeMaxima;

    if (!!velocidadeValida) {
      this.velocidadeAtual = novaVelocidade;
    }

    return this.velocidadeAtual;
  }

  getVelocidadeAtual() {
    return this.velocidadeAtual;
  }

  acelerar() {
    console.log('Acelerando...');
    return this.alterarVelocidade(5);
  }

  frear() {
    console.log('Freando...');
    return this.alterarVelocidade(-5);
  }
}

const ka = new Carro('Ford', 'Ka', 180);

Array(20).fill(0).forEach(() => ka.acelerar())
console.log(`A velocidade atual é ${ka.getVelocidadeAtual()}km/h`)
Array(30).fill(0).forEach(() => ka.frear())
console.log(`A velocidade atual é ${ka.getVelocidadeAtual()}km/h`)
