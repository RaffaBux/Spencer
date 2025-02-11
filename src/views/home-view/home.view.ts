import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
	selector: 'home',
	imports: [RouterOutlet],
	templateUrl: './home.view.html',
	styleUrl: './home.view.css',
	host: {
		'name': 'home'
	}
})

export class HomeView {}
