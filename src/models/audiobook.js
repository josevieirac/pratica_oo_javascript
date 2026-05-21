import { Livro } from "./livro.js";

export class Audiobook extends Livro {
    constructor (titulo, autor) {
        super (titulo, autor);
    }
}