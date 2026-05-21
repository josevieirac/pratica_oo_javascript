export class Livro {
    #titulo;
    #autor;
    #disponivel;

    constructor(titulo, autor) {
        this.titulo = titulo;
        this.autor = autor;
        this.disponivel = true;
    }

    get titulo() {
        return this.#titulo;
    }

    set titulo(novoTitulo) {
        if(!novoTitulo || novoTitulo.trim() === ""){
            throw new Error ("O livro precisa ter um título. ");
        }
        this.#titulo= novoTitulo;
    }

    get autor() {
        return this.#autor;
    }

    set autor(novoAutor) {
        if (!novoAutor || novoAutor.trim() === "") {
            throw new Error ("Preencha o nome do autor. ");
        }
        this.#autor = novoAutor;
    }

    get disponivel() {
        return this.#disponivel;
    }

    set disponivel(disponivelAtualizado) {
        this.#disponivel = disponivelAtualizado;
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