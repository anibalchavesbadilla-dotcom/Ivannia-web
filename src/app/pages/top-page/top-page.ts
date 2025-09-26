import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-top-page',
  imports: [],
  templateUrl: './top-page.html',
  styleUrl: './top-page.css'
})
export class TopPage implements OnInit {
  title: any;
  des: any;
  mision: any;

  constructor(private httpClient:HttpClient) {}

  ngOnInit(): void {
    this.httpClient.get("https://ivannia-miller-vasquez-default-rtdb.firebaseio.com/TopPage.json").subscribe((datos:any)=>{
      this.title = datos.Title
      this.des = datos.des
      this.mision = datos.mision
    })
  }

}
