import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';
import { HomeComponent } from './home/home.component';
import { ResultComponent } from './result/result.component';

const ROUTES:Routes=[
  {path: '', component:HomeComponent},
  {path: 'result', component:ResultComponent},
  {path: 'result/:res', component: ResultComponent}
]

@NgModule({
  imports:      [ BrowserModule, FormsModule, RouterModule.forRoot(ROUTES)],
  declarations: [ AppComponent, HelloComponent, HomeComponent, ResultComponent ],
  bootstrap:    [ AppComponent ]
})

export class AppModule { }
