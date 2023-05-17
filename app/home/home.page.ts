
import { AlertController } from '@ionic/angular';
import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  selectSelecionado: string = '';
  valorDigitado: string='';
  calculop1: number = 0;
  calculop2: number = 0;

  constructor(
    public alertController: AlertController
  ) {}



calculo(){
  console.log(this.selectSelecionado);
  if (this.selectSelecionado == 'pix') {
    this.calculop1 = ( parseFloat(this.valorDigitado)*0.1)
    this.calculop2 = parseFloat(this.valorDigitado) - this.calculop1
    this.exibirAlert()

  }else if(this.selectSelecionado=='debito'){
    this.calculop2 = parseFloat(this.valorDigitado)
    this.exibirAlert()
  }else{
    this.calculop1 = (parseFloat(this.valorDigitado) *0.1)
    this.calculop2 = (parseFloat(this.valorDigitado) + this.calculop1)
    this.exibirAlert()
  }

}

  async exibirAlert() {
    const alert = await this.alertController.create({
      header: 'o valor a ser pago é: ' + this.calculop2,
      // message: 'o valor a ser pago é: ' + this.calculop2.toString
      buttons:['OK']
    });
    alert.present();
  }





}
