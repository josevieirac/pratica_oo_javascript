import { Pessoa } from "./Pessoa.js";

export class Usuario extends Pessoa {
    #livrosEmprestados = [];

    constructor(nome, idade) {
        
        if (idade < 18) {
            throw new Error("Usuário menor de idade.");
        }
        if (nome === ""){
            throw new Error("Não definido nome de usuário.")
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