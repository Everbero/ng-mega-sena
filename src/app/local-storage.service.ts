import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class LocalStorageService {
  constructor() {}

  main_array: Array<number> = [
    1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21,
    22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 38, 39, 40,
    41, 42, 43, 44, 45, 46, 47, 48, 49, 50, 51, 52, 53, 54, 55, 56, 57, 58, 59,
    60,
  ];

  sorted_array: Array<any> = [];
  games_array: Array<any> = [];
  last_game: any = []

  // Fisher-Yates sort algorith
  private shuffleArray = (array: Array<number>) => {
    for (let i = array.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      const temp = array[i];
      array[i] = array[j];
      array[j] = temp;
    }
  };

  public checkHistory() {
    let history: any = localStorage.getItem('historico');

    if (history !== null) {
      history = JSON.parse(history);
      history.forEach((item: Array<number>) => {
        this.games_array.push(item);
        // console.log(item);
      });
      // this.games_array = JSON.parse(history);
    }
  }

  public populate_arr = (nros: string) => {
    this.shuffleArray(this.main_array);
    
    // salva o último jogo no LS
    this.sorted_array = this.main_array.slice(0, parseInt(nros));
    localStorage.setItem('lastGame', JSON.stringify(this.sorted_array));
    
    // salva todos os jogos no LS
    this.games_array.push(this.sorted_array);
    localStorage.setItem('historico', JSON.stringify(this.games_array));
    
    this.last_game.push( localStorage.getItem('lastGame'))
  };

  public reset_arr = () => {
    this.sorted_array = this.games_array = [];
    localStorage.clear();
    window.location.reload();
  };
}
