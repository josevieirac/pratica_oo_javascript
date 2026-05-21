export class Pessoa {
    #nome;
    #idade;

    constructor(nome, idade) {
        this.#nome = nome;
        this.#idade = idade;

         if (idade < 18) {
                throw new Error("Usuário deve ter pelo menos 16 anos para se cadastrar.");
            }
        

        
            if (!nome || nome.trim() === "") {
                throw new Error("Nome do usuário não pode ser vazio.");
            }
    }

    get nome() {
        return this.#nome;
    }

    set nome(novoNome) {
        if (novoNome.length < 3) {
            throw new Error("Nome inválido");
        }

        this.#nome = novoNome;
    }

    get idade() {
        return this.#idade;
    }

    apresentar() {
        return `Olá, meu nome é ${this.#nome}`;
    }
}