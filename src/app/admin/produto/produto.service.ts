import { Injectable } from '@angular/core';

import { Http, Headers, HttpModule } from '@angular/http';
import 'rxjs/add/operator/map';

import { Produto } from './produto';

@Injectable()
export class ProdutoService {

    public API_URL: string = 'http://localhost:8080';

    constructor(public http: Http) { }

    /**
     * Listar Produtos
     */
    getProdutos(): any {
        return new Promise((resolve, reject) => {
            this.http
                .get(`${this.API_URL}/produto`)
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
    * Retornar Produto por ID
    */
    getProduto(id: number): any {
        return new Promise((resolve, reject) => {
            this.http
                .get(`${this.API_URL}/produto/${id}`)
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
     * Removendo Produto por id
     */
    deleteProduto(id: number): any {
        return new Promise((resolve, reject) => {
            this.http
                .delete(`${this.API_URL}/produto/${id}`)
                .map(res => res.json())
                .subscribe(
                data => {
                    resolve(data.messages)
                },
                error => {
                    reject(error);
                }
                )
        });
    }

}