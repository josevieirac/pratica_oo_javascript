import { Pessoa } from "./Pessoa.js";

export class Usuario extends Pessoa {
    #livrosEmprestados = [];

    constructor(nome, idade) {
        super(nome, idade);
    }

    emprestarLivro(livro) {
        if (this.#livrosEmprestados.length >= 3){
            throw new Error ("Limite de empréstimos de livro excedidido (3) ")
        }

        this.#livrosEmprestados.push(livro);
    }

    listarLivros() {
        return this.#livrosEmprestados;
    }
}