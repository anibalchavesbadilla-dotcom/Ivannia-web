import { Routes } from '@angular/router';
import { Home } from './pages/home/home';
import { About } from './pages/about/about';
import { RutasConexiones } from './pages/rutas-conexiones/rutas-conexiones';
import { Project } from './pages/project/project';
import { Login } from './components/login/login';
import { Admin } from './components/admin/admin';
import { authGuard } from './guards/auth.guard';
import { AdminLayoutComponent } from './features/admin/admin-layout/admin-layout';
import { Conectemos } from './conectemos/conectemos';

export const routes: Routes = [
  // Ruta inicial → redirigir a SoulSync
  { path: '', redirectTo: 'SoulSync', pathMatch: 'full' },

  // Tus rutas normales
  { path: 'SoulSync', component: Home },
  { path: 'about', component: About },
  { path: 'Conectemos', component: Conectemos },
  { path: 'Rutas-Conexiones', component: RutasConexiones },
  { path: 'proyeto', component: Project },
  { path: 'login', component: Login },
  { path: 'admin', component: AdminLayoutComponent, canActivate: [authGuard] },

  // Rutas no encontradas → SoulSync
  { path: '**', redirectTo: 'SoulSync' },
];
