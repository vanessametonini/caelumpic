import { Component, Input } from '@angular/core';

@Component({
  selector: 'painel',
  moduleId: module.id,
  templateUrl: './painel.component.html',
  styleUrls: ['./painel.component.css']
})
export class PainelComponent {

  @Input() titulo: string;

  constructor() { }

}
