import { HomeComponent } from './home/home.component';
import { Routes } from '@angular/router';

export const routes: Routes = [
    { path: 'Home', component: HomeComponent },
    { path: '', redirectTo: '/Home', pathMatch: 'full'},
];
