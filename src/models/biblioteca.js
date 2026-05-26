export class Biblioteca {
    constructor(nome) {
        this.nome = nome;
        this.livros = [];
        this.usuarios = [];
    }

    adicionarLivro(livro) {
        this.livros.push(livro);
    }

    removerLivro(titulo, autor) {
        this.livros = this.livros.filter(livro => !(livro.titulo === titulo && livro.autor === autor));
    }   

    cadastrarUsuario(usuario) {
        this.usuarios.push(usuario);
    }

    listarLivrosDisponiveis() {
        return this.livros.filter(livro => livro.disponivel);
    }
    buscarLivroPorTitulo(titulo) {
        return this.livros.find(livro => livro.titulo === titulo);
    }   
}