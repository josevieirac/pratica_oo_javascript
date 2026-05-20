import { Biblioteca } from "./models/Biblioteca.js";
import { Livro } from "./models/Livro.js";
import { Usuario } from "./models/Usuario.js";
import { Funcionario } from "./models/Funcionario.js";
import { EmprestimoService } from "./services/EmprestimoService.js";

//biblioteca criada
const biblioteca = new Biblioteca("Biblioteca Central");

//livros
let livro1;
let livro2;
let livro3;

//usuario
let usuario;

//funcionario
let funcionario;

try {
    //livros criados
    livro1 = new Livro("Clean Code", "Robert Martin");
    livro2 = new Livro("JavaScript Patterns", "Stoyan Stefanov");
    livro3 = new Livro("Dart Patterns", "assd");

     //adicionol livros na biblioteca
    biblioteca.adicionarLivro(livro1);
    biblioteca.adicionarLivro(livro2);

    //empretrou o livro
    funcionario.aprovarEmprestimo(usuario, livro1);
    EmprestimoService.realizarEmprestimo(usuario, livro1);

} catch (erro){
    console.log(erro.message);

}

try {
    //criou um usuario
    usuario = new Usuario("", 20);

    //cadastrou o usuario na biblioteca
    biblioteca.cadastrarUsuario(usuario)

    console.log(usuario.listarLivros());

} catch (err){
    console.log(err.message);
}






//cadastrou a funcionaria na biblioteca
funcionario = new Funcionario("Ana", 30, "Bibliotecária");



biblioteca.removerLivro({titulo: 'JavaScript Patterns'});
console.log(biblioteca.livros);