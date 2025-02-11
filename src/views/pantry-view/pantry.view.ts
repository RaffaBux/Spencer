import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
	selector: 'pantry-view',
	imports: [RouterOutlet],
	templateUrl: './pantry.view.html',
	styleUrl: './pantry.view.css',
	host: {
		'name': 'pantry'
	}
})

export class PantryView {}
