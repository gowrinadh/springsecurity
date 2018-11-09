import { Component, OnInit, isDevMode } from '@angular/core';

import { environment } from '../environments/environment';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  ngOnInit(): void {
    if (isDevMode()) {
      console.log('👋 Development!');
    } else {
      console.log('💪 Production!');
    }
  }
  title = 'app';
}
