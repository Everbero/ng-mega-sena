import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ResultsService {
  constructor(private http: HttpClient) {}

  headers = new HttpHeaders({
    'Content-Type': 'application/json',
    'Access-Control-Allow-Origin': '*',
  });

  listarUsuarios(): Observable<any> {
    return this.http.get(
      'https://servicebus2.caixa.gov.br/portaldeloterias/api/megasena'
    );
  }
}
