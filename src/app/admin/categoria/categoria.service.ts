import { Injectable } from '@angular/core';
import { Http, Headers, HttpModule } from '@angular/http';
import 'rxjs/add/operator/map';
import { Categoria } from './categoria';

@Injectable()
export class CategoriaService {

    public API_URL: string = 'http://localhost:8080';

    constructor(public http: Http) { }

    /**
     * Listar categorias.
     */
    getCategorias(): any {
        return new Promise((resolve, reject) => {
            this.http
                .get(`${this.API_URL}/categoria`)
                .map(res => res.json())
                .subscribe(
                data => {
                    console.log(data);
                    resolve(data.content)
                },
                error => {
                    console.log("Erro");
                    reject(error);
                }
                )
        });
    }

    /**
     * Retornar Categoria por ID
     */
    getCategoria(id: number): any {
        return new Promise((resolve, reject) => {
            this.http
                .get(`${this.API_URL}/categoria/${id}`)
                .map(res => res.json())
                .subscribe(
                data => {
                    resolve(data.content)
                },
                error => {
                    reject(error);
                }
                )
        });
    }

    /**
     * Removendo Categoria por id
     */
    deleteCategoria(id: number): any {
        return new Promise((resolve, reject) => {
            console.log("oiii");
            this.http            
                .delete(`${this.API_URL}/categoria/${id}`)
                .map(res => res.json())
                .subscribe(
                data => {
                    resolve(data)
                },
                error => {
                    reject(error);
                }
                )
        });
    }

    
}