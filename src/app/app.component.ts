import { Component } from '@angular/core';
import {FormControl, FormGroup} from "@angular/forms";
import {mergeWith} from "rxjs";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'uloha1';
  cenaKs: number = 0;
  mnozstvo: number = 0;
  spolu: number = 0;


}
