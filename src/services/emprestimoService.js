export class EmprestimoService {
    static realizarEmprestimo(usuario, livro) {
        livro.emprestar();
        usuario.emprestarLivro(livro);

        console.log(
            `Livro "${livro.titulo}" emprestado para ${usuario.nome}`
        );
    }
}