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
livro2 = new Livro("JavaScript Patterns", "Stoyan Stefanov");
}catch (error) {
    console.error(error.message);
}

biblioteca.adicionarLivro(livro1);
biblioteca.adicionarLivro(livro2);

let usuario;
try {
 usuario = new Usuario("Carlos", 25);
}catch (error) {
    console.error(error.message);
}
biblioteca.cadastrarUsuario(usuario);

const funcionario = new Funcionario("Ana", 30, "Bibliotecária");

funcionario.aprovarEmprestimo(usuario, livro1);

EmprestimoService.realizarEmprestimo(usuario, livro1);

console.log(usuario.listarLivros());