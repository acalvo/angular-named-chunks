import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'angular-named-chunks';
  constructor() {
    const theme = "a";
    import(/* webpackChunkName: "theme-" */`../jsons/${theme}.json`)
  }
}
