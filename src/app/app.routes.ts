import { Routes } from '@angular/router';
import { HomeView } from '../views/home-view/home.view';
import { PantryView } from '../views/pantry-view/pantry.view';
import { UpdatePantryView } from '../views/update-pantry-view/update-pantry.view';

export const routes: Routes = [
    { path: '', component: HomeView },
    { path: 'pantry', component: PantryView },
    { path: 'update-pantry', component: UpdatePantryView }
];
