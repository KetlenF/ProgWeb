import { Component, OnInit } from '@angular/core';
import { CategoriaService } from '../categoria.service';
import { Categoria } from '../categoria';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-visualizar-categoria',
  templateUrl: './visualizar-categoria.component.html',
  styleUrls: ['./visualizar-categoria.component.scss']
})
export class VisualizarCategoriaComponent implements OnInit {

  categoria: Categoria;

  constructor(
    private categoriaService: CategoriaService,
    private route: ActivatedRoute,
    private router: Router
  ) {
    this.categoria = new Categoria();
  }

  ngOnInit() {
    const id = Number.parseInt(this.route.snapshot.paramMap.get('id'));

    console.log(id);
    this.categoriaService.getCategoria(id).
      then(result => {
        this.categoria = result;
      })
      .catch(error => {
        console.log(' ----- ERROR ----- ' + error.message);
      });
  }

}
