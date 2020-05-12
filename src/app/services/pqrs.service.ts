import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Pqrs } from '../domain/Pqrs';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class PqrsService {

  public url: string;

  constructor(public httpClient: HttpClient) {
    this.url = environment.url + 'pqrs/';
  }

  public save(pqrs: Pqrs): Observable<any> {
    return this.httpClient.post(this.url + 'save', pqrs);
  }
  public update(pqrs: Pqrs): Observable<any> {
    return this.httpClient.put(this.url + 'update', pqrs);
  }
  public cambioEstado(pqrs: Pqrs): Observable<any> {
    return this.httpClient.put(this.url + 'cambioEstado', pqrs);
  }
  public findById(id: string): Observable<any> {
    return this.httpClient.get(this.url + 'findById/' + id)
  }

}
