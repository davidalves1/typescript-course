interface Pessoa {
  nome: string
  idade: number
}

interface Profissional extends Pessoa {
  profissao: string
  saudar(): void
}


const pessoa1: Pessoa = {
  nome: 'Edu',
  idade: 44,
}

const pessoa2: Profissional = {
  nome: 'Ana',
  idade: 30,
  profissao: 'Dev',
  saudar() {
    console.log(`
      Olá, meu nome é ${this.nome}, tenho ${this.idade} e trabalho como ${this.profissao}
    `);
  }
}

pessoa2.saudar();
