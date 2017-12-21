import { Component, OnInit, TemplateRef } from '@angular/core';
import { Produto } from '../produto';
import { ProdutoService } from '../produto.service';
import { CarrinhoService } from '../../../carrinho/carrinho.service';

import { BsModalService } from 'ngx-bootstrap/modal';
import { BsModalRef } from 'ngx-bootstrap/modal/bs-modal-ref.service';


@Component({
  selector: 'app-listar-produtos',
  templateUrl: './listar-produto.component.html',
  styleUrls: ['./listar-produto.component.scss']
})
export class ListarProdutoComponent implements OnInit {

  produtos: Produto[];
  modalRef: BsModalRef;
  message: string;
  selectProduto: Produto;
  selectIndex: number;

  constructor(
    private produtoService: ProdutoService,
    private carrinhoService: CarrinhoService,
    private modalService: BsModalService ) { }

    adicionarProduto(produto: Produto){
      this.carrinhoService.adicionarProduto(produto);
    }

  ngOnInit() {
    this.produtoService.getProdutos().
      then(result => {
        console.log(result)
        this.produtos = result;
      })
      .catch(error => {
        console.log(' ----- ERROR ----- ' + error.message);
      });
  }

  delete(id: number, index: number) {
    this.produtoService.deleteProduto(id).then(result => {
        console.log(result);
        this.produtos.splice(index, 1);
      })
      .catch(error => {
        console.log(' ----- ERROR ----- ' + error.message);
      });
  }

  openModal(template: TemplateRef<any>, produto: Produto, index: number): void{
    this.selectProduto = produto;
    
    this.selectIndex = index;
    this.modalRef = this.modalService.show(template, {class: 'modal-sm'});
  }  

  confirm(): void{
    this.message = 'Confirmado!';
    this.modalRef.hide();
  }
  
  decline(): void{
    this.message = 'Negado!';
    this.modalRef.hide();
  }

}
