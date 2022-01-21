// Classes, herança e métodos de acesso aos atributos
class Moto {
  constructor(
    private nome: string,
    public velocidade: number = 0
  ) {}

  buzinar() {
    console.log('Toooooooooot!');
  }

  acelerar(delta: number) {
    this.velocidade = this.velocidade + delta;
  }
}

const moto = new Moto('Ducati')

moto.buzinar()
console.log(moto.velocidade)

moto.acelerar(30)
console.log(moto.velocidade)

// Exercício 2 - Herança
abstract class Objeto2D {
  constructor(
    protected base: number,
    protected altura: number,
  ) {}

  abstract area(): number
}

class Retangulo extends Objeto2D {
  area() {
    return this.base * this.altura;
  }
}

const retangulo = new Retangulo(5, 7);
console.log('Área retângulo 5x7:', retangulo.area());

// Exercício 3 - Getters & Setters
class Estagiario {
  private _primeiroNome: string = '';

  get primeiroNome() {
    return this._primeiroNome
  }

  set primeiroNome(nome: string) {
    if (nome.length >= 3) {
      this._primeiroNome = nome;
    } else {
      this._primeiroNome = '';
    }
  }
}

const estagiario = new Estagiario()

console.log(estagiario.primeiroNome)

estagiario.primeiroNome = 'Le'
console.log(estagiario.primeiroNome)

estagiario.primeiroNome = 'Leonardo'
console.log(estagiario.primeiroNome)
