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
  last_game: any = [];

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
    let currentUser = localStorage.getItem('isLoggedIn');
    let history: any = localStorage.getItem('historico_'+currentUser);

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

    let currentUser = localStorage.getItem('isLoggedIn')
    // salva o último jogo no LS
    this.sorted_array = this.main_array.slice(0, parseInt(nros));
    localStorage.setItem('lastGame_'+currentUser, JSON.stringify(this.sorted_array));

    // salva todos os jogos no LS
    this.games_array.push(this.sorted_array);
    localStorage.setItem('historico_'+currentUser, JSON.stringify(this.games_array));

    this.last_game.push(localStorage.getItem('lastGame_'+currentUser));
  };

  public reset_arr = () => {
    this.sorted_array = this.games_array = [];
    let currentUser = localStorage.getItem('isLoggedIn')
    // localStorage.clear();
    localStorage.removeItem('historico_'+currentUser);
    localStorage.removeItem('lastGame_'+currentUser);
    window.location.reload();
  };

  public authenticateUser = (username: any, password: any) => {

    if (localStorage.getItem('user_' + username)) {
      if (localStorage.getItem('password_' + username) === password) {
        localStorage.setItem('isLoggedIn', username);
      } else {
        return alert('senha incorreta para o usuário ' + username);
      }
    } else {
      localStorage.setItem('user_' + username, username);
      localStorage.setItem('password_' + username, password);
      localStorage.setItem('isLoggedIn', username);
      return alert('Bem vindo ' + username + ' uma nova conta foi criada');
    }
  };

  public checkAuth = () => {
    let info = localStorage.getItem('isLoggedIn');

    if (info) return info;

    return false;
  };

  public removeAuth = () => {
    localStorage.removeItem('isLoggedIn');
  };
}
