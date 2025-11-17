import { Routes } from '@angular/router';
import { Home } from './pages/home/home';
import { About } from './pages/about/about';
import { Contact } from './pages/contact/contact';

export const routes: Routes = [
  { path: 'SoulSync', component: Home },
  { path: 'about', component: About },
  { path: 'contact', component: Contact },
  { path: '', redirectTo: 'SoulSync', pathMatch: 'full' },
  { path: '#', redirectTo: 'SoulSync' },
  { path: '**', redirectTo: 'SoulSync' }
];
