import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-busqueda-criteria',
  templateUrl: './busqueda-criteria.component.html',
  styleUrls: ['./busqueda-criteria.component.css']
})
export class BusquedaCriteriaComponent {

  @Output() criteriaSelected = new EventEmitter();

  onCriteriaSelect(criteria: number) {
    this.criteriaSelected.emit(criteria);
  }

}
