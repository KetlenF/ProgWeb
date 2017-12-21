import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { FormControl, FormGroup, FormBuilder, Validators } from '@angular/forms';

import { Categoria } from '../categoria';
import { CategoriaService } from '../categoria.service';

@Component({
  selector: 'app-cadastro-categoria',
  templateUrl: './cadastro-categoria.component.html',
  styleUrls: ['./cadastro-categoria.component.scss']
})

export class CadastroCategoriaComponent implements OnInit {
  

  voltarListaCategoria(): void {
    this.router.navigate(['/admin/categoria']);
  }

  public criarCadastro(): void {
    this.categoriaForm = this.builder.group({
      id: [this.categoria.id],
      nome: [this.categoria.nome, Validators.required]
    });
  }

  public id: any;
  public categoria: Categoria;
  public categoriaForm: FormGroup;


  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private categoriaService: CategoriaService,
    private builder: FormBuilder
  ) {
      this.id = this.route.snapshot.paramMap.get('id');
      this.categoria = new Categoria();

      if(this.id != null){
        this.categoriaService.getCategoria(this.id).subscribe(
          response =>{
            this.categoria = response.content;
            this.criarCadastro();
          },
            error => console.log(error.message)
        );
      } else {
        this.criarCadastro();
      }
   }

  ngOnInit(): void {
    this.criarCadastro();
  }



}
