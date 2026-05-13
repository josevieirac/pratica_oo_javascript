import { Pessoa } from "./Pessoa.js";

export class Funcionario extends Pessoa {
    constructor(nome, idade, cargo) {
        super(nome, idade);
        this.cargo = cargo;
    }

    aprovarEmprestimo(usuario, livro) {
        console.log(
            `${this.nome} aprovou o empréstimo do livro ${livro.titulo}`
        );
    }
}