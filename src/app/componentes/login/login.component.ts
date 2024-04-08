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
    this.logerService.loguear(this.log.user, this.log.pass).subscribe(
      response => {
        console.log(response);
        if (response === "Ok") {
          this.router.navigate(['/registro']); // Redirige a /registro si la respuesta es "Ok"
        } else {
          alert("Usuario o contraseña incorrectos"); // Muestra un mensaje de alerta en caso de error
        }
      },
      error => {
        console.log(error);
        alert("Ha ocurrido un error. Por favor, inténtelo de nuevo."); // Muestra un mensaje de alerta en caso de error de conexión
      }
    )
  }
}
