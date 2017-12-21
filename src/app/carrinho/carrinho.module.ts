import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CarrinhoService } from './carrinho.service';
import { CarrinhoComponent } from './carrinho.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [CarrinhoComponent],
  providers: [CarrinhoService],
  exports: [CarrinhoComponent]
})
export class CarrinhoModule { }
