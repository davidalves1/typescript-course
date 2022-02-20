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
