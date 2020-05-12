import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Login } from 'src/app/domain/Login';
import { PqrsService } from 'src/app/services/pqrs.service';
import { Pqrs } from 'src/app/domain/Pqrs';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  public registerAux: boolean = false;
  public login:Login;
  public pqrs: Pqrs;

  constructor(public router:Router, public matSnackBar:MatSnackBar,
              public pqrsService: PqrsService) { }

  public openMatSnackBar(mesagge: string, action: string) {
      this.matSnackBar.open(mesagge, action, { duration: 3000 });
  }

  ngOnInit() {
    this.login = new Login("");
  }

  public doLogin(){
    this.pqrsService.findById(this.login.id).subscribe(data=>{
      this.pqrs = data;
      localStorage.setItem('IdPQRS', this.pqrs.pqrsId);
      this.redireccionar("admin");
    }, error => {
      this.openMatSnackBar('Radicado, no encontrado',"Error");
    });
  }

  redireccionar(ruta: String) {
    setTimeout(() => {
      this.router.navigate([ruta]);
    }, 1000)
  }

}