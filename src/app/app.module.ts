import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import { FormsModule } from '@angular/forms';
import { ModalModule } from 'ngx-bootstrap/modal';

import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { ListarProdutoComponent } from './admin/produto/listar-produto/listar-produto.component';
import { AdminComponent } from './admin/admin/admin.component';
import { CategoriaComponent } from './admin/categoria/categoria.component';
import { CadastroProdutoComponent } from './admin/produto/cadastro-produto/cadastro-produto.component';
import { VisualizarProdutoComponent } from './admin/produto/visualizar-produto/visualizar-produto.component';
import { CadastroCategoriaComponent } from './admin/categoria/cadastro-categoria/cadastro-categoria.component';
import { ListarCategoriaComponent } from './admin/categoria/listar-categoria/listar-categoria.component';
import { VisualizarCategoriaComponent } from './admin/categoria/visualizar-categoria/visualizar-categoria.component';
import { ProdutoService } from './admin/produto/produto.service';
import { CategoriaService } from './admin/categoria/categoria.service';
import { CarrinhoComponent } from './carrinho/carrinho.component';
import { CarrinhoService } from './carrinho/carrinho.service';


@NgModule({
  declarations: [
    AppComponent,
    ListarProdutoComponent,
    AdminComponent,
    CategoriaComponent,
    CadastroProdutoComponent,
    VisualizarProdutoComponent,
    CadastroCategoriaComponent,
    ListarCategoriaComponent,
    VisualizarCategoriaComponent,
    CarrinhoComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpModule,
    ModalModule.forRoot()

  ],
  providers: [
    CategoriaService,
    ProdutoService,
    CarrinhoService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
