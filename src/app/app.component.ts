import { Component } from '@angular/core';
import {FormControl, FormGroup} from "@angular/forms";


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  decCislo=0;
  sedem=128;
  sest=64;
  pat=32;
  styri=16;
  tri=8;
  dva=4;
  jedna=2;
  nula=1;

  form:FormGroup;
  constructor() {
    this.form=new FormGroup({
      decCislo: new FormControl(),
    })
  }
}
