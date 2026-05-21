import { Livro } from "./livro.js";

export class LivroFisico extends Livro {
    constructor (titulo, autor) {
        super (titulo, autor);
    }
}