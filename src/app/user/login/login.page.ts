import { Component, OnInit } from '@angular/core';

// Importa dependências
import { AngularFireAuth } from '@angular/fire/compat/auth';
import firebase from 'firebase/compat/app';
import { AlertController } from '@ionic/angular';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  constructor(
    // Injeta dependências
    public auth: AngularFireAuth,
    public alertController: AlertController,
    private route: Router
  ) { }

  ngOnInit() { }

  login() {
    this.auth.signInWithPopup(new firebase.auth.GoogleAuthProvider()).then(
      (user) => {
        console.log(user.user);
        this.presentAlert(user.user.displayName);
      }
    );
  }

  async presentAlert(userName) {
    const alert = await this.alertController.create({
      cssClass: 'my-custom-class',
      header: `Olá ${userName}!`,
      message: 'Você já pode acessar nosso conteúdo exclusivo...',
      buttons: [
        {
          text: 'Ok',
          handler: () => {
            console.log('Confirm Cancel: blah');
          }
        }
      ]
    });

    await alert.present();
  }

}
