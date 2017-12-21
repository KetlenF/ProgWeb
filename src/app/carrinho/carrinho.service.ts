import { Injectable } from '@angular/core';

import {Http} from '@angular/http';

import {Produto} from '../admin/produto/produto'

@Injectable()
export class CarrinhoService{
    produtos : Produto[] = [];

    constructor(public http : Http){}

    adicionarProduto(produto : Produto){
        this.produtos.push(produto);
        console.log(produto.nome + "  size = "+ this.produtos.length);
    }

    removerProduto(id: number){
        this.produtos = this.produtos.filter(produto => produto.id !== id);
    }

    
}