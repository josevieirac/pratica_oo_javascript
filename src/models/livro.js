export class Livro {
    constructor(titulo, autor) {
        if (!autor || autor.trim() === "") {
            throw new Error("Você não pode cadastrar um livro sem autor");
        }
        if (!titulo || titulo.trim() === "") {
            throw new Error("Você não pode cadastrar um livro sem título");
        }
        this.titulo = titulo;
        this.autor = autor;
        this.disponivel = true;
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