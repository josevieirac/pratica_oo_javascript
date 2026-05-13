export class Pessoa {
    #nome;
    #idade;

    constructor(nome, idade) {
        this.#nome = nome;
        this.#idade = idade;
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