import { Livro } from "./livro.js";

export class Ebook extends Livro {
    constructor (titulo, autor) {
        super (titulo, autor);
    }

    obterFormato() {
        return ("Livro digital (Ebook) ");
    }
}