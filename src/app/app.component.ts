import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
    selector: 'app-root',
    imports: [RouterOutlet],
    templateUrl: './app.component.html',
    styleUrl: './app.component.css',
	host: {
		'name': 'app-root'
	}
})

export class AppRoot {
  	title = 'Spencer';
}
