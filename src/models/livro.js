export class Livro {
    constructor(titulo, autor) {
        this.titulo = titulo;
        this.autor = autor;
        this.disponivel = true;

        if (!autor || autor.trim() === "") {
            throw new Error("Autor do livro não pode ser vazio.");
        }
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