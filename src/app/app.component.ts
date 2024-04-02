import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { provideClientHydration } from '@angular/platform-browser';
import { HomeComponent } from './component/home/home.component';

@Component({
  selector: 'app-root',
  standalone:true,
  imports:[
    RouterOutlet
  ],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'template';
}
