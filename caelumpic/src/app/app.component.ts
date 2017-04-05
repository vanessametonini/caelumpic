import {Component, Inject} from '@angular/core';
import { Http } from '@angular/http';

@Component({
    moduleId: module.id,
    selector: 'app-root',
    templateUrl: './app.component.html'
})
export class AppComponent {

    title = 'Caelum Pic';
    fotos: Object[] = [];

    constructor(http: Http) {
        http.get('http://localhost:3000/v1/fotos')
        .map(res => res.json())
        .subscribe(
            fotos => this.fotos = fotos,
            erro => console.error(erro)
        );
    }
}