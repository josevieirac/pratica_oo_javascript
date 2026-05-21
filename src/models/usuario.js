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

    devolverLivro(livro) {
        const index = this.#livrosEmprestados.indexOf(livro);

        if (index !== -1) {
            this.#livrosEmprestados.splice(index, 1);
        }else {
            throw new Error ("Este livro não está emprestado com este usuário. ")
        }
    }
}