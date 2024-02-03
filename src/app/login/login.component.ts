import { Component } from '@angular/core';
import { Router, RouterLink, RouterOutlet } from '@angular/router';
import { RegistroComponent } from '../registro/registro.component';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [RouterOutlet,RouterLink, RegistroComponent],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {

}
