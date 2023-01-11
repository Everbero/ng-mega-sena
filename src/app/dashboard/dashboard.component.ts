
import { Component, OnInit } from '@angular/core';
import { LocalStorageService } from '../local-storage.service';
import { ResultsService } from '../results.service';
@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})

export class DashboardComponent implements OnInit {
  resultado: any;
  constructor(private localData: LocalStorageService, private results : ResultsService) { }
  games: Array<any> = this.localData.games_array;
  apiURL = 'http://servicebus2.caixa.gov.br/portaldeloterias/api/megasena';

  ngOnInit(): void {
    this.getLast()
    this.getLastResult()
  }

  getLastResult(): any {
    this.results.listarUsuarios().subscribe({
      next: (resultado: any) => (this.resultado = resultado.data)
      //error:,
      //complete:
    });
    console.log(this.resultado);
  }
  getLast(): any {
     this.localData.checkHistory();
     console.log('geted');
  }
  
}
