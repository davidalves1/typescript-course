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
}

const produto1 = new Produto('Lápis', 3, 0.2)
const produto2 = new Produto('Caneta', 5)

console.log(produto1, produto2);
