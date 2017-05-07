import { Component } from '@angular/core';
import { Hero } from './hero';
import { HeroService } from './hero.service';
import { OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'my-heroes',
  templateUrl: './heroes.component.html',
  styleUrls : ['./heroes.component.css']
})
export class HeroesComponent implements OnInit {
  heroes:Hero[];
  selectedHero :Hero ;

  constructor(private heroService: HeroService, private router:Router){
    
  }

  onSelect(hero:Hero){
    this.selectedHero = hero;
  }

  getHeroes():void{
    this.heroService.getHeroes().then(heroes => this.heroes = heroes);
  }

  ngOnInit():void{
    this.getHeroes();
  }

  gotoDetail(): void {
    console.log('test');
    console.log(this.selectedHero.id);
    this.router.navigate(['/detail', this.selectedHero.id]);
  }
}





