import { Component, OnInit } from '@angular/core';
import { LocalStorageService } from '../local-storage.service';

@Component({
  selector: 'app-jogos',
  templateUrl: './jogos.component.html',
  styleUrls: ['./jogos.component.css']
})
export class JogosComponent implements OnInit {
  constructor(private localData: LocalStorageService) { }

  sorted_array = this.localData.sorted_array;
  games_array = this.localData.games_array;

  ngOnInit(): void {
    this.localData.checkHistory();
    this
  }

  reset_arr(): void{
    this.localData.reset_arr();
    this.sorted_array = this.games_array = []
  }
  
  populate_arr(nros: string): void{
    this.localData.populate_arr(nros);
  };
  
}
