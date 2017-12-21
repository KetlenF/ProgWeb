import { Component, OnInit, TemplateRef } from '@angular/core';
import { Categoria } from '../categoria';
import { CategoriaService } from '../categoria.service';
import { BsModalService } from 'ngx-bootstrap/modal';
import { BsModalRef } from 'ngx-bootstrap/modal/bs-modal-ref.service';

@Component({
  selector: 'app-listar-categoria',
  templateUrl: './listar-categoria.component.html',
  styleUrls: ['./listar-categoria.component.scss']
})

export class ListarCategoriaComponent implements OnInit {

  categorias: Categoria[];
  modalRef: BsModalRef;
  message: string;
  selectCategoria: Categoria;
  selectIndex: number;

  constructor(
    private categoriaService: CategoriaService,
    private modalService: BsModalService ) { }

  ngOnInit() {

    console.log("Categoria listar");

    this.categoriaService.getCategorias().
      then(result => {
        console.log(result)
        this.categorias = result;
      })
      .catch(error => {
        console.log(' ----- ERROR ----- ' + error.message);
      });
      
  }

  delete(id: number, index: number) {
    this.categoriaService.deleteCategoria(id).then(result => {
        console.log(result);
        this.categorias.splice(index, 1);
      })
      .catch(error => {
        console.log(' ----- ERROR ----- ' + error.message);
      });
  }

  openModal(template: TemplateRef<any>, categoria: Categoria, index: number): void{
    this.selectCategoria = categoria;
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


