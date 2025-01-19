import { Routes } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { PortfolioComponent } from './portfolio/portfolio.component';
import { HomeComponent } from './home/home.component';
import { HandleErrorComponent } from './handle-error/handle-error.component';

export const routes: Routes = [
{path:'',component:HomeComponent,title:'home page'},
{path:'about', component:AboutComponent,title:'about page'},
{path:'contact',component:ContactComponent,title:'contact' },
{path:'portfolio',component:PortfolioComponent,title:'portfolio' },

{path:'**',component:HandleErrorComponent,title:'error page'}
];
