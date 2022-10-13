import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'ng-mega-sena';
  test_array: Array<number> = [];

  public retorna_rand = () => {
    return Math.floor(Math.random() * 60);
  };

  public populate_arr = (nros: number) => {
    for (let i = 0; i <= nros; i++) {
      this.test_array.push(this.retorna_rand());
    }
  };
  public sort_arr = () => {
    if (this.test_array.length > 0) {
      this.test_array.sort((a, b) => a - b);
    } else {
      alert('nothing to sort');
    }
  };
  public reset_arr = () => {
    this.test_array = [];
  };
}
