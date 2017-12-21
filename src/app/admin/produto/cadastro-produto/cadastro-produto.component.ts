import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-cadastro-produto',
  templateUrl: './cadastro-produto.component.html',
  styleUrls: ['./cadastro-produto.component.scss']
})
export class CadastroProdutoComponent implements OnInit {

  sucesso: boolean = false;
  // public produto: Produto;
  // public categoria: Categoria[];

  constructor(
    // private produtoService: ProdutoService,
    // private categoriaService: CategoriaService
  ) { 
    // this.produto = new Produto();
    // this.produto.id = 0;
  }

  ngOnInit() {
    // this.categoriaService
    // .getCategoria()
    // .subscribe(
    //   response => {
    //     this.categoria = response.content;
    //   },
    //   error => this.alert.setMessage(error.message, 'error')
    // );

    // const id = this.route.snapshot.paramMap.get('id');
    // if (id != null) { this.carregarProduto(id); }
  }

  enviar(): void{
    this.sucesso = true;
  }

}
