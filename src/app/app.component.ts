import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
   

    <nav class="navbar navbar-inverse">
      <div class="container">
        <div class="navbar-header">
          <button type="button" class="navbar-toggle collapsed" data-toggle="collapse" data-target="#show-link" aria-expanded="false">
            <span class="sr-only">Toggle navigation</span>
            <span class="icon-bar"></span>
            <span class="icon-bar"></span>
            <span class="icon-bar"></span>
          </button>
          <a class="navbar-brand" href="#">{{title}}</a>
        </div>
        <div class="collapse navbar-collapse" id="show-link">
          <ul class="nav navbar-nav">
            <li><a routerLink="/dashboard" routerLinkActive="active">Dashboard</a></li>
            <li><a routerLink="/heroes" routerLinkActive="active">Heroes</a></li>
          </ul>
        </div>
      </div>
    </nav>
    <div class="container">
      <router-outlet></router-outlet>
    </div>
    `,
    styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Tour of Heroes';
}
