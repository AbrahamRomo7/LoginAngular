import { Component, OnInit } from '@angular/core';
import { LogerService } from '../../services/loger.service';
import { Log } from './log.model';
import { Router } from '@angular/router'; // Importa Router para la redirección

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'] // Cambia "styleUrl" a "styleUrls"
})
export class LoginComponent implements OnInit {
  constructor(private logerService: LogerService, private router: Router) { } // Inyecta Router en el constructor

  ngOnInit(): void {
  }

  log: Log = {
    user: '',
    pass: ''
  };

  login() {
          this.router.navigate(['/registro']); // Redirige a /registro si la respuesta es "Ok"
  }
}
