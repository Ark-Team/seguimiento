import { Component, OnInit } from '@angular/core';
import { DetallePqrs } from 'src/app/domain/DetallePqrs';
import { DetallePqrsService } from 'src/app/services/detalle-pqrs.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.css']
})
export class DetailComponent implements OnInit {

  id:string;
  idDetail:string;
  detallePqrs: DetallePqrs;
  show:boolean = false;

  constructor(public detalleService: DetallePqrsService, public activateRoute: ActivatedRoute) { }

  ngOnInit(): void {
    this.id = localStorage.getItem('IdPQRS');
    this.findDetail();
  }

  findDetail(){
    let params = this.activateRoute.params['_value'];
    this.idDetail = params.id;
    this.detalleService.findById(this.idDetail).subscribe(data=>{
      this.detallePqrs = data;
      this.show = true;
    })
  }

}
