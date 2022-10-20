import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'ng-mega-sena';
  main_array: Array<number> = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31,32,33,34,35,36,37,38,39,40,41,42,43,44,45,46,47,48,49,50,51,52,53,54,55,56,57,58,59,60];
  sorted_array: Array<number> = [];
  games_array: Array<Array<number>> = [];

  ngOnInit(): void {
    this.checkHistory()
  }
  
  // Fisher-Yates sort algorith
  public shuffleArray = (array: Array<number>) => {
    for (let i = array.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      const temp = array[i];
      array[i] = array[j];
      array[j] = temp;
    }
  }
  public checkHistory(){
    console.log('checking');
    let history: any = localStorage.getItem('historico');
    console.log(typeof history);

    
    if(history !== null){
      history = JSON.parse(history);
      history.forEach((item: Array<number>) => {
        this.games_array.push(item)
      })
      // this.games_array = JSON.parse(history);

    }
  }
  // localStorage.setItem(key, data);
  // localStorage.removeItem(key);
  // localStorage.getItem(key);
  // localStorage.setItem(key, JSON.stringify(obj));
  // const result=JSON.parse(localStorage.getItem(key));

  public populate_arr = (nros: string) => {
    this.shuffleArray(this.main_array);
    this.sorted_array = this.main_array.slice(0, parseInt(nros));
    this.games_array.push(this.sorted_array);
    localStorage.setItem('historico', JSON.stringify(this.games_array));
  };

  public reset_arr = () => {
    this.sorted_array = this.games_array = [];
    localStorage.clear();

  };
}
