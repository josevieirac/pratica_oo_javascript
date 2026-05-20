export class Livro {
    constructor(titulo, autor) {
        this.titulo = titulo;
        this.autor = autor;
        this.disponivel = true;

        if (this.autor === "") {
            throw new Error ("livro sem autor")
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