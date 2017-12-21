import { Component, OnInit } from '@angular/core';
import { ProdutoService } from '../produto.service';
import { Produto } from '../produto';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-visualizar-produto',
  templateUrl: './visualizar-produto.component.html',
  styleUrls: ['./visualizar-produto.component.scss']
})
export class VisualizarProdutoComponent implements OnInit {

  produto: Produto;

  constructor(
    private produtoService: ProdutoService,
    private route: ActivatedRoute,
    private router: Router
  ) {
    this.produto = new Produto();
  }

  ngOnInit() {
    const id = Number.parseInt(this.route.snapshot.paramMap.get('id'));

    console.log(id);
    this.produtoService.getProduto(id).
      then(result => {
        this.produto = result;
      })
      .catch(error => {
        console.log(' ----- ERROR ----- ' + error.message);
      });
  }

}