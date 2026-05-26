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


/*
try {
            if (idade < 18) {
                throw new Error("Usuário deve ter pelo menos 18 anos para se cadastrar.");
            }
        } catch (error) {
            console.error(error.message);
        }

        try {
            if (!nome || nome.trim() === "") {
                throw new Error("Nome do usuário não pode ser vazio.");
            }
        } catch (error) { 
            console.error(error.message);
        }

*/