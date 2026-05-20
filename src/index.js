import { Biblioteca } from "./models/Biblioteca.js";
import { Livro } from "./models/Livro.js";
import { Usuario } from "./models/Usuario.js";
import { Funcionario } from "./models/Funcionario.js";
import { EmprestimoService } from "./services/EmprestimoService.js";

const biblioteca = new Biblioteca("Biblioteca Central");

let livro1;
let livro2;
try{
livro1 = new Livro("Clean Code", "Robert Martin");
biblioteca.adicionarLivro(livro1);

livro2 = new Livro("JavaScript Patterns", "Coisinha de jesus");
biblioteca.adicionarLivro(livro2);

}catch (e){
    console.error("Erro: ", e.message)

}



try {
const usuario = new Usuario("Carlos", 20);
const funcionario = new Funcionario("Ana", 30, "Bibliotecária");
biblioteca.cadastrarUsuario(usuario);
funcionario.aprovarEmprestimo(usuario, livro1);

EmprestimoService.realizarEmprestimo(usuario, livro1);

console.log(usuario.listarLivros());
}catch (e) {
    console.error("Erro:", e.message);
}


console.log(biblioteca.livros);

biblioteca.removerLivro({titulo:'javaScript Patterns'});

console.log(biblioteca.livros);

