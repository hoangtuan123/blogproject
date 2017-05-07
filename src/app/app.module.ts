import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';

import { ProdcutDetailComponent } from './product/product-detail.component';

import { HeroService } from './hero.service';
import { LogonService } from './services/logon.servive';
import { ProductService } from './services/product.service';

import { HeroesComponent } from './heroes.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { AppRoutingModule } from './app-routing.module';
import { LoginComponent } from './login/login.component';


import { AlertModule } from 'ng2-bootstrap/ng2-bootstrap';
import { Location } from '@angular/common'
import { AuthGuard } from './_guards/auth.guard';
import { ArticleComponent } from './article/article.component';
import { ArticleService } from './services/article.service';

@NgModule({
  declarations: [
    AppComponent,
    ProdcutDetailComponent,
    HeroesComponent,
    DashboardComponent,
    LoginComponent,
    ArticleComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    AppRoutingModule,
    AlertModule.forRoot()
  ],
  providers: [HeroService,LogonService,Location, ProductService,AuthGuard, ArticleService],
  bootstrap: [AppComponent]
})
export class AppModule { }
