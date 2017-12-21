import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ListarProdutoComponent } from './admin/produto/listar-produto/listar-produto.component';
import { VisualizarProdutoComponent } from './admin/produto/visualizar-produto/visualizar-produto.component';
import { AdminComponent } from './admin/admin/admin.component';
import { AppComponent } from './app.component';
import { ListarCategoriaComponent } from './admin/categoria/listar-categoria/listar-categoria.component';
import { VisualizarCategoriaComponent } from './admin/categoria/visualizar-categoria/visualizar-categoria.component';
import { CarrinhoComponent } from './carrinho/carrinho.component';


const routes: Routes = [
  {
    path: '',
    children: [
      {
        path: '', redirectTo: '/admin', pathMatch: 'full'
      },
      {
        path: 'admin', component: AdminComponent,
        children: [
          { path: 'categoria/listar', component: ListarCategoriaComponent },
          { path: 'produto/listar', component: ListarProdutoComponent },
          { path: 'produto/visualizar/:id', component: VisualizarProdutoComponent },
          { path: 'categoria/visualizar/:id', component: VisualizarCategoriaComponent },
          { path: 'carrinho/listar-carrinho', component: CarrinhoComponent }
        ]
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
