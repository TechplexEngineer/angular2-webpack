import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { Script } from '../script';
import { ScriptService } from '../script.service';

@Component({
  selector: 'my-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css'],
  providers: [ScriptService]
})
export class DashboardComponent implements OnInit {

	scripts: Script[] = [];

	constructor(
		private router: Router,
		private scriptService: ScriptService) {
	}

	ngOnInit() {
		// this.scriptService.getScripts()
		// 	.then(scripts => {
		// 		this.scripts = scripts;
		// 		console.log(scripts);
		// 	});
	}

	// gotoDetail(hero: Hero) {
	//   let link = ['/detail', hero.id];
	//   this.router.navigate(link);
	// }
}
