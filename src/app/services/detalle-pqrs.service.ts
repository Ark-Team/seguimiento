import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { DetallePqrs } from '../domain/DetallePqrs';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class DetallePqrsService {
  public url: string;

  constructor(public httpClient: HttpClient) {
    this.url = environment.url + 'detallePqrs/';
  }

  public findById(id: String): Observable<any> {
    return this.httpClient.get(this.url + 'findById/' + id)
  }
  public findAllByPqrsId(id: string): Observable<any>{
    return this.httpClient.get(this.url+'findAllByPqrs/'+id);
  }
}
