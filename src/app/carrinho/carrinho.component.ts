import { Component, OnInit } from '@angular/core';

import {CarrinhoService} from './carrinho.service';
import {Produto} from '../admin/produto/produto';

@Component({
  selector: 'app-carrinho',
  templateUrl: './carrinho.component.html',
  styleUrls: ['./carrinho.component.scss']
})
export class CarrinhoComponent implements OnInit {

  constructor(private carrinhoService: CarrinhoService) { }

  ngOnInit() {
  }

  adicionarProduto(produto: Produto){
    this.carrinhoService.adicionarProduto(produto);
  }

  removerProduto(id: number){
    this.carrinhoService.removerProduto(id);
  }

}
