import { AboutComponent } from './about/about.component';
import { FooterComponent } from './footer/footer.component';
import { HomeComponent } from './home/home.component';
import { Routes } from '@angular/router';

export const routes: Routes = [
    { path: 'Home', component: HomeComponent },
    { path: 'About', component: AboutComponent},
    { path: 'Footer', component: FooterComponent },
    { path: '', redirectTo: '/Home', pathMatch: 'full'},
];
