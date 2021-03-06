import { provideRouter, RouterConfig }  from '@angular/router';

// import { HeroesComponent } from './heroes/heroes.component';
import { DashboardComponent } from './dashboard/dashboard.component';
// import { HeroDetailComponent } from './hero-detail/hero-detail.component';

const routes: RouterConfig = [
	{
		path: '',
		redirectTo: '/dashboard',
		pathMatch: 'full'
	},
	{
		path: 'dashboard',
		component: DashboardComponent
	},
	// {
	// 	path: 'detail/:id',
	// 	component: HeroDetailComponent
	// },
];

export const appRouterProviders = [
  provideRouter(routes)
];
