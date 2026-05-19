import { Routes } from '@angular/router';
import { Home } from './pages/home/home';
import { About } from './pages/about/about';
import { Foros } from './pages/foros/foros';
import { Publicar } from './pages/publicar/publicar';
import { Login } from './pages/login/login';
import { Registro } from './pages/registro/registro';
import { Feed } from './pages/feed/feed';
import { Perfil } from './pages/perfil/perfil';

export const routes: Routes = [
    { path: '', component: Home },
    { path: 'about', component: About },
    { path: 'foros', component: Foros },
    { path: 'publicar', component: Publicar },
    { path: 'login', component: Login },
    { path: 'registro', component: Registro },
    { path: 'feed', component: Feed },
    { path: 'perfil', component: Perfil },
    { path: '**', redirectTo: '' }
];