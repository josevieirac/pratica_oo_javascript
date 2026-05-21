import { Funcionario } from "./funcionario.js";

export class Administrador extends Funcionario {
    constructor (nome, idade, cargo) {
        super (nome, idade, cargo);
    }
}