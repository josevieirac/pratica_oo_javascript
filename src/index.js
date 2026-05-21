import { Biblioteca } from "./models/Biblioteca.js";
import { Livro } from "./models/Livro.js";
import { Usuario } from "./models/Usuario.js";
import { Funcionario } from "./models/Funcionario.js";
import { EmprestimoService } from "./services/EmprestimoService.js";
import { LivroFisico } from "./models/livroFisico.js";
import { Ebook } from "./models/ebook.js";
import { Audiobook } from "./models/audiobook.js";

const biblioteca = new Biblioteca("Biblioteca Central");

const livro1 = new Livro("Clean Code", "Robert Martin");
const livro2 = new Livro("JavaScript Patterns", "Stoyan Stefanov");

const livroPapel2 = new LivroFisico("O Senhor dos Anéis", "Tolkien");
const livroDigital = new Ebook("1984", "George Orwell");
const audioLivro = new Audiobook("livro teste", "Fulano de tal");

biblioteca.adicionarLivro(livro1);
biblioteca.adicionarLivro(livro2);

const usuario = new Usuario("Carlos", 25);

biblioteca.cadastrarUsuario(usuario);

const funcionario = new Funcionario("Ana", 30, "Bibliotecária");

funcionario.aprovarEmprestimo(usuario, livro1);

EmprestimoService.realizarEmprestimo(usuario, livro1);

console.log(usuario.listarLivros());

console.log("Formato do livro de papel:", livroPapel2.obterFormato());
console.log("Formato do livro digital:", livroDigital.obterFormato());
console.log("Formato do audio livro:  ", audioLivro.obterFormato());