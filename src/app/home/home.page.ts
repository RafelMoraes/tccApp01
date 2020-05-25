import { Component } from '@angular/core';
import { AlertController, NavController } from '@ionic/angular';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})

export class HomePage {


  constructor(public alertCtrl: AlertController) { }

  

  async showAlert() {
    const myAlert = await this.alertCtrl.create({
      header: 'Atenção',
      message: 'E-mail ou Senha Inválido.',

      buttons: ['OK']
    });

    myAlert.present();
  }

}