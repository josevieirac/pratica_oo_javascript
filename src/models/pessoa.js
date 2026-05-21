export class Pessoa {
    #nome;
    #idade;

    constructor(nome, idade) {
        
        if (idade < 18 || idade === null || idade === undefined){
            throw new Error("A pessoa não possui idade para cadastro no sistema");
        }
        if (nome.trim() === "" || nome === null || nome === undefined){
            throw new Error("Não definido um nome válido.")
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