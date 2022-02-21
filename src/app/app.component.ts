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
  public zaskrtni128(event:any) {
    if (event.target.checked) {
      this.decCislo = this.decCislo + this.sedem;
    } else {
      this.decCislo= this.decCislo - this.sedem;
    }
  }

  public zaskrtni64(event:any) {
    if (event.target.checked) {
      this.decCislo = this.decCislo + this.sest;
    } else {
      this.decCislo= this.decCislo - this.sest;
    }
  }

  public zaskrtni32(event:any) {
    if (event.target.checked) {
      this.decCislo = this.decCislo + this.pat;
    } else {
      this.decCislo= this.decCislo - this.pat;
    }
  }
  public zaskrtni16(event:any) {
    if (event.target.checked) {
      this.decCislo = this.decCislo + this.styri;
    } else {
      this.decCislo= this.decCislo - this.styri;
    }
  }
  public zaskrtni8(event:any) {
    if (event.target.checked) {
      this.decCislo = this.decCislo + this.tri;
    } else {
      this.decCislo= this.decCislo - this.tri;
    }
  }
  public zaskrtni4(event:any) {
    if (event.target.checked) {
      this.decCislo = this.decCislo + this.dva;
    } else {
      this.decCislo= this.decCislo - this.dva;
    }
  }
  public zaskrtni2(event:any) {
    if (event.target.checked) {
      this.decCislo = this.decCislo + this.jedna;
    } else {
      this.decCislo= this.decCislo - this.jedna;
    }
  }
  public zaskrtni1(event:any) {
    if (event.target.checked) {
      this.decCislo = this.decCislo + this.nula;
    } else {
      this.decCislo= this.decCislo - this.nula;
    }
  }

}
