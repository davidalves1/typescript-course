/**
 * Desafio:
 *
 * Incluir a tipagem no código abaixo
 */

type ContaBancaria = {
    saldo: number;
    depositar: (valor: number) => void;
}

type Correntista = {
    nome: string;
    contatos: string[];
    contaBancaria: ContaBancaria;
}

const contaBancaria: ContaBancaria = {
    saldo: 3456,
    depositar(valor) {
        this.saldo += valor;
    }
}

const correntista: Correntista = {
    nome: 'David Alves',
    contatos: ['27999993333', '2737311111'],
    contaBancaria,
}

correntista.contaBancaria.depositar(8000);
console.log(correntista);
