import { Component, OnInit, isDevMode } from '@angular/core';
import { LocalStorageService } from '../local-storage.service';
import { ResultsService } from '../results.service';
@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css'],
})
export class DashboardComponent implements OnInit {
  isDev = isDevMode();
  constructor(
    private localData: LocalStorageService,
    private results: ResultsService
  ) {}
  games: Array<any> = this.localData.games_array;
  resultado: any = '';
  ngOnInit(): void {
    this.getLast();
    this.getLastResult();
  }

  getLastResult(): any {
    this.results.listarUsuarios().subscribe({
      next: (result: any) => (
        (this.resultado = result),
        console.log(result),
        localStorage.setItem('lastResult', JSON.stringify(result))
      ),
      error: (err: any) => console.log(err),
      //complete:
    });
  }
  getLast(): any {
    this.localData.checkHistory();
  }
}
