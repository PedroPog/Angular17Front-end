import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { AppComponent } from './app/app.component';
import { bootstrapApplication } from '@angular/platform-browser';
import { config } from './app/app.module.server';


bootstrapApplication(AppComponent,config)
  .catch(err => console.error(err));
