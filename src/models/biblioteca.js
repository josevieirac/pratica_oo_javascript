export class Biblioteca {
    constructor(nome) {
        this.nome = nome;
        this.livros = [];
        this.usuarios = [];
    }

    adicionarLivro(livro) {
        this.livros.push(livro);
    }

    cadastrarUsuario(usuario) {
        this.usuarios.push(usuario);
    }

    listarLivrosDisponiveis() {
        return this.livros.filter(livro => livro.disponivel);
    }

    removerLivro(livro){
        const posicao = this.livros.indexOf(livro);

        if (posicao !== -1){
            this.livros.splice(posicao, 1);
        }
        }


    }
