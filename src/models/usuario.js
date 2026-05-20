import { Pessoa } from "./Pessoa.js";

export class Usuario extends Pessoa {
    #livrosEmprestados = [];

    constructor(nome, idade) {
        if (idade < 18) {
            throw new Error ("Você não tem idade nescessaria para fazer o cadastro");
        }else if (nome === "") {
            throw new Error ("Nome vazio, preecha nome novamente !!!");
        }
        super(nome, idade);
    }

    emprestarLivro(livro) {
        this.#livrosEmprestados.push(livro);
    }

    listarLivros() {
        return this.#livrosEmprestados;
    }
}