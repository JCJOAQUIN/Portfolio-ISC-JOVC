import { AboutComponent } from './about/about.component';
import { FooterComponent } from './footer/footer.component';
import { HomeComponent } from './home/home.component';
import { Routes } from '@angular/router';
import { PortfolioComponent } from './portfolio/portfolio.component';
import { ContactComponent } from './contact/contact.component';
import { ResumeComponent } from './resume/resume.component';
import { CreditsComponent } from './credits/credits.component';

export const routes: Routes = [
    { path: 'Home', component: HomeComponent },
    { path: 'About', component: AboutComponent},
    { path: 'Portfolio', component: PortfolioComponent},
    { path: 'Contact', component: ContactComponent},
    { path: 'Resume', component: ResumeComponent},
    { path: 'Credits', component: CreditsComponent},
    { path: 'Footer', component: FooterComponent },
    { path: '', redirectTo: '/Home', pathMatch: 'full'},
];
