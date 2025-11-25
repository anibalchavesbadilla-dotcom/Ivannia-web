import { Routes } from '@angular/router';
import { Home } from './pages/home/home';
import { About } from './pages/about/about';
import { Contact } from './pages/contact/contact';
import { RutasConexiones } from './pages/rutas-conexiones/rutas-conexiones';
import { Project } from './pages/project/project';

export const routes: Routes = [
  { path: 'SoulSync', component: Home },
  { path: 'about', component: About },
  { path: 'contact', component: Contact },
  { path: 'Rutas-Conexiones', component: RutasConexiones },
  { path: 'proyeto', component: Project },
  { path: '', redirectTo: 'SoulSync', pathMatch: 'full' },
  { path: '#', redirectTo: 'SoulSync' },
  { path: '**', redirectTo: 'SoulSync' }
];
