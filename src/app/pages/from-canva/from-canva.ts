import { NgFor } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';

@Component({
  selector: 'app-from-canva',
  imports: [NgFor],
  templateUrl: './from-canva.html',
  styleUrl: './from-canva.css'
})
export class FromCanva implements OnInit {
  canva: SafeResourceUrl | undefined;

  constructor(private httpClient:HttpClient,private sanitizer: DomSanitizer) {}

  ngOnInit(): void {
    this.httpClient.get("https://ivannia-miller-vasquez-default-rtdb.firebaseio.com/canva.json").subscribe((datos:any)=>{
      let url = datos.url
      this.canva = this.sanitizer.bypassSecurityTrustResourceUrl(url+"/view?embed")
    })
  }

}
