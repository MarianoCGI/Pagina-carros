import { Component,Input } from '@angular/core';
import { Busqueda } from '../busqueda.model';

interface BusRes {
  carros: Busqueda[];
  criteria: string;
}
@Component({
  selector: 'app-busqueda-result',
  templateUrl: './busqueda-result.component.html',
  styleUrls: ['./busqueda-result.component.css']
})
export class BusquedaResultComponent {
  @Input() criteriaListenedFromExternalComponent: BusRes = {carros: [],criteria: ''};
  @Input() loading: boolean = false;
}
