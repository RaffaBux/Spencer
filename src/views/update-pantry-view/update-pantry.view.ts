import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
	selector: 'update-pantry-view',
	imports: [RouterOutlet],
	templateUrl: './update-pantry.view.html',
	styleUrl: './update-pantry.view.css',
	host: {
		'name': 'update-pantry'
	}
})

export class UpdatePantryView {}
