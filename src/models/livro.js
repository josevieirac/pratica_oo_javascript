export class Livro {
    constructor(titulo, autor) {
        if (autor === ""){
            throw new Error("Insira o nome do autor ao cadastrar um novo livro");
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