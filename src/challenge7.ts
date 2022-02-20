// Aplicar decorator na classe

type Usuario = {
  nome: string;
  email: string;
  admin: boolean;
}

// Desafio Decorator perfilAdmin
const usuarioLogado: Usuario = {
  nome: 'Guilherme Filho',
  email: 'guigui@gmail.com',
  admin: true
}

type Constructor = { new(...args: any[]): {} }

function perfilAdmin<T extends Constructor>(constructor: T) {
  return class extends constructor {
    constructor(...args: any[]) {
      super(...args);

      if (!usuarioLogado?.admin) {
        throw new Error('Este usuário não possui acesso!');
      }
    }
  }
}

@perfilAdmin
class MudancaAdministrativa {
  critico() {
      console.log('Algo crítico foi alterado!')
  }
}


new MudancaAdministrativa().critico()

// Aplicar decorator no método

class ContaCorrente {
  constructor(private saldo: number = 0) {}

  @freeze
  saque(valor: number) {
    if (valor <= this.saldo) {
      this.saldo -= valor;

      return true
    }

    return false
  }

  @freeze
  getSaldo() {
    return this.saldo;
  }
}

const conta = new ContaCorrente(10000);

console.log('Saldo:', conta.getSaldo());
conta.saque(3004);

// conta.getSaldo = function () {
//   return this['saldo'] + 4000;
// }

console.log('Saldo:', conta.getSaldo());

function freeze(instance: any, methodName: string, descriptor: PropertyDescriptor) {
  console.log(instance, methodName);
  descriptor.writable = false;
}
