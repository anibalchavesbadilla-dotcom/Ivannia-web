import { Component } from '@angular/core';
import { TopPage } from "../top-page/top-page";
import { FromCanva } from "../from-canva/from-canva";

@Component({
  selector: 'app-home',
  imports: [TopPage, FromCanva],
  templateUrl: './home.html',
  styleUrl: './home.css'
})
export class Home {

}
