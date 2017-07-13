import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'my application';
  author = 'Ricardo Rojas';
  count = 0;
  imgSource = './../favicon.ico';
  enabled = false;

  increment() {
    this.count = this.count + 1;
  }

  isEnabled() {
    if (this.enabled) {
      this.enabled = false;
    } else {
      this.enabled = true;
    }
  }
}
