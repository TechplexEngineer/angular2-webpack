import { Injectable } from '@angular/core';
import { Headers, Http } from '@angular/http';

import 'rxjs/add/operator/toPromise';

import { Script } from './script';

@Injectable()
export class ScriptService {
	private heroesUrl = 'http://localhost:7070/script';  // URL to web api

	constructor(private http: Http) { }

	getScripts() {
	    return this.http.get(this.heroesUrl)
	               .toPromise()
	               .then(response => {
	               		return (response.json() as Map<string, Script>);
	               		// return response.json();
	               })
	               .catch(this.handleError);
	}
	// getHero(id: number) {
 //    return this.getHeroes()
 //               .then(heroes => heroes.find(hero => hero.id === id));
 //    }
	// // Add new Hero
	// private post(hero: Hero): Promise<Hero> {
	//   let headers = new Headers({
	//     'Content-Type': 'application/json'});

	//   return this.http
	//              .post(this.heroesUrl, JSON.stringify(hero), {headers: headers})
	//              .toPromise()
	//              .then(res => res.json().data)
	//              .catch(this.handleError);
	// }
	// // Update existing Hero
	// private put(hero: Hero) {
	//   let headers = new Headers();
	//   headers.append('Content-Type', 'application/json');

	//   let url = `${this.heroesUrl}/${hero.id}`;

	//   return this.http
	//              .put(url, JSON.stringify(hero), {headers: headers})
	//              .toPromise()
	//              .then(() => hero)
	//              .catch(this.handleError);
	// }
	// delete(hero: Hero) {
	//   let headers = new Headers();
	//   headers.append('Content-Type', 'application/json');

	//   let url = `${this.heroesUrl}/${hero.id}`;

	//   return this.http
	//              .delete(url, {headers: headers})
	//              .toPromise()
	//              .catch(this.handleError);
	// }
	// save(hero: Hero): Promise<Hero>  {
	//   if (hero.id) {
	//     return this.put(hero);
	//   }
	//   return this.post(hero);
	// }
	private handleError(error: any) {
		console.error('An error occurred', error);
		return Promise.reject(error.message || error);
	}
}