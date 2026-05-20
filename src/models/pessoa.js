export class Pessoa {
    #nome;
    #idade;

    constructor(nome, idade) {
        if (!nome || nome.trim() === "") {
            throw new Error("O nome não pode ser vazio");
        }

        if (idade < 18) {
            throw new Error("Você deve ter mais de 18 anos para se cadastrar");
        }
        
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