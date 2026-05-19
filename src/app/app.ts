import { Component } from '@angular/core';
import { RouterOutlet, Router } from '@angular/router';
import { CommonModule } from '@angular/common';
import { Navbar } from './components/navbar/navbar';
import { Topbar } from './components/topbar/topbar';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, CommonModule, Navbar, Topbar],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  constructor(public router: Router) { }

  usaSidebar(): boolean {
    const rutas = ['/', '/about', '/foros', '/publicar'];
    return rutas.includes(this.router.url);
  }

  usaTopbar(): boolean {
    const rutas = ['/login', '/registro', '/feed', '/perfil'];
    return rutas.includes(this.router.url);
  }
}