import { Pessoa } from "./Pessoa.js";

export class Usuario extends Pessoa {
    #livrosEmprestados = [];

    constructor(nome, idade) {
        
        super(nome, idade);
    }

    emprestarLivro(livro) {
        this.#livrosEmprestados.push(livro);
    }

    listarLivros() {
        return this.#livrosEmprestados;
    }
}