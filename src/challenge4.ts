/**
 * Desafio classe produto
 * Atributos: nome, preco e desconto
 * Criar o construtor
 * Obs1: desconto é opcional (valor padrão é zero)
 * Obs2: criar 2 produtos (um com 2 parâmetros e outro com 3 parâmetros)
 */

class Produto {
  constructor(
    public nome: string,
    public preco: number,
    public desconto: number = 0
  ) {}

  resumo() {
    return `
      O produto ${this.nome} custa
      ${Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL' })
        .format(this.precoComDesconto())} (${this.desconto * 100}% off)
    `;
  }

  precoComDesconto() {
    return this.preco * (1 - this.desconto);
  }
}

const produto1 = new Produto('Lápis', 3, 0.25)
const produto2 = new Produto('Caneta', 5)

console.log(produto1, produto2);
console.log(produto1.resumo())
console.log(produto2.resumo())
