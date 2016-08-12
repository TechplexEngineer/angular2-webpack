import { Component }       from '@angular/core';
import { ROUTER_DIRECTIVES } from '@angular/router';

// import { HeroService }     from './hero.service';
// import { HeroesComponent } from './heroes/heroes.component';
// import { HeroDetailComponent } from './hero-detail/hero-detail.component';
import { DashboardComponent } from './dashboard/dashboard.component';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: [
  ],
  directives: [ROUTER_DIRECTIVES],
  precompile: [DashboardComponent],
  // providers: [HeroService]
})
export class AppComponent {
}
