import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { DashboardComponent }   from './dashboard/dashboard.component';
import { HeroesComponent }      from './heroes.component';
import { ProdcutDetailComponent }  from './product/product-detail.component';
import { LoginComponent }  from './login/login.component';
import { AuthGuard } from './_guards/auth.guard';

const routes: Routes = [
  { path: '', redirectTo: '/login', pathMatch: 'full' },
  { path: 'dashboard',  component: DashboardComponent ,canActivate: [AuthGuard]  },
  { path: 'detail/:id', component: ProdcutDetailComponent, canActivate: [AuthGuard]  },
  { path: 'heroes',     component: HeroesComponent },
  { path: 'login',     component: LoginComponent },
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule {}
