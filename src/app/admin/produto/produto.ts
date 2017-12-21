import { Categoria } from '../categoria/categoria';

export class Produto {
    id: number;
    nome: String;
    descricao: String;
    categoria: Categoria;
    preco: number;
}