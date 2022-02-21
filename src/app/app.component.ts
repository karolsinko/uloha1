import { Component } from '@angular/core';
import {FormControl, FormGroup} from "@angular/forms";
import {mergeWith} from "rxjs";
enum MENU { OSOBY = 0, KNIHY = 1, VYPOZICKY = 2 }
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = "aaa";

  binarne7 = parseInt("111", 2);
  binarne6 = parseInt("110", 2);
  binarne5 = parseInt("101", 2);
  binarne4 = parseInt("100", 2);
  binarne3 = parseInt("11", 2);
  binarne2 = parseInt("10", 2);
  binarne1 = parseInt("1", 2);
  binarne0 = parseInt("0", 2);

  cislo7 = 128;
  cislo6 = 64;
  cislo5 = 32;
  cislo4 = 16;
  cislo3 = 8;
  cislo2 = 4;
  cislo1 = 2;
  cislo0 = 1;

  bin: any = [];
  dec: any = [];
  form: FormGroup;



  constructor() {
    this.form = new FormGroup({
      bin: new FormControl()
    })
  }

  obsah(event: any) {
    this.dec = event.target.value;

  }

  /*public prevodDecNaBin(){
    this.bin = ((this.dec).toString(2));
  }*/
  kontrola7(event: any){
    this.bin = event.target.value;
    /*if(this.bin == this.binarne7){
     event.target.checked;*/
  }
  kontrola6(event: any) {
    this.bin = event.target.value;
  }
  kontrola5(event: any) {
    this.bin = event.target.value;
  }
  kontrola4(event: any) {
    this.bin = event.target.value;
  }
  kontrola3(event: any) {
    this.bin = event.target.value;
  }
  kontrola2(event: any) {
    this.bin = event.target.value;
  }
  kontrola1(event: any) {
    this.bin = event.target.value;
  }
  kontrola0(event: any) {
    this.bin = event.target.value;
  }

}





