export class Livro {
    #titulo;
    #autor;

    constructor(titulo, autor) {
        this.#titulo = titulo;
        this.#autor = autor;
        this.#disponivel = true;
    }

    emprestar() {
        if (!this.disponivel) {
            throw new Error("Livro indisponível");
        }

        this.disponivel = false;
    }

    devolver() {
        this.disponivel = true;
    }
}