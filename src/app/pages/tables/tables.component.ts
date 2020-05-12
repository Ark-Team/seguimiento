import { Component, OnInit, ViewChild } from '@angular/core';
import { DetallePqrsService } from 'src/app/services/detalle-pqrs.service';
import { DetallePqrs } from 'src/app/domain/DetallePqrs';

@Component({
  selector: 'app-tables',
  templateUrl: './tables.component.html',
  styleUrls: ['./tables.component.scss']
})
export class TablesComponent implements OnInit {

  public listaDetalle: DetallePqrs[];
  public id: string;

  @ViewChild('content') content: any;

  constructor(public detallePqrsService: DetallePqrsService) { }

  ngOnInit() {
    this.id = localStorage.getItem('IdPQRS');
    this.findAllDetails();
  }

  findAllDetails() {
    this.detallePqrsService.findAllByPqrsId(this.id).subscribe(data => {
      this.listaDetalle = data;
    });
  }

}
