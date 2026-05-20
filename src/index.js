import { Biblioteca } from "./models/Biblioteca.js";
import { Livro } from "./models/Livro.js";
import { Usuario } from "./models/Usuario.js";
import { Funcionario } from "./models/Funcionario.js";
import { EmprestimoService } from "./services/EmprestimoService.js";

const biblioteca = new Biblioteca("Biblioteca Central");

const livro1 = new Livro("Clean Code", "Robert Martin");
const livro2 = new Livro("JavaScript Patterns", "Stoyan Stefanov");

biblioteca.adicionarLivro(livro1);
biblioteca.adicionarLivro(livro2);

const usuario = new Usuario("Carlos", 25);

biblioteca.cadastrarUsuario(usuario);

const funcionario = new Funcionario("Ana", 30, "Bibliotecária");

funcionario.aprovarEmprestimo(usuario, livro1);

EmprestimoService.realizarEmprestimo(usuario, livro1);

console.log(usuario.listarLivros());

console.log('\n livros disponives antes da remocao:');
console.log(biblioteca.livros);

biblioteca.removerLivro(livro1);

console.log('\n livros disponives depois da remocao:');
console.log(biblioteca.livros);