import { Component } from '@angular/core';
import { IPerritos } from './perritos.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'my-store';
  name = 'De: Ezequiel'
  type = 'password'
  textoInput = 'null'
  btnDisabled = false
  mascota = {
    nombre: 'Pelu',
    tipo: 'Gato',
    patas: 4
  }
  perritos: IPerritos[] = [
    {
      nombre: 'raul',
      edad: 11,
      img: 'https://images.dog.ceo/breeds/setter-irish/n02100877_1803.jpg'
    },
    {
      nombre: 'gabriela',
      edad: 9,
      img: 'https://images.dog.ceo/breeds/terrier-cairn/n02096177_4520.jpg'
    },
    {
      nombre: 'claudio',
      edad: 6,
      img: 'https://images.dog.ceo/breeds/pomeranian/n02112018_3494.jpg'
    },
    {
      nombre: 'pepi',
      edad: 3,
      img: 'https://images.dog.ceo/breeds/pinscher-miniature/n02107312_7029.jpg'
    }
  ]
  textoBtnDisabled() {
    if (this.btnDisabled) {
      return ':('
    } else {
      return ':D'
    }
  }

  toggleButton() {
    this.btnDisabled = !this.btnDisabled
  }
  register = {
    name: '',
    email: '',
    password: ''
  }
  meRegistroPa() {
    alert('asdasd')
  }
  detalleParent = ''
}
