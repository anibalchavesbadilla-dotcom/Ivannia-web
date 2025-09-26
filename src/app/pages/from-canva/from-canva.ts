import { NgFor, NgIf } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';

@Component({
  selector: 'app-from-canva',
  imports: [NgFor,NgIf],
  templateUrl: './from-canva.html',
  styleUrl: './from-canva.css'
})
export class FromCanva implements OnInit {
  canva: SafeResourceUrl | undefined;
  images: any[] = [];

  constructor(private httpClient:HttpClient,private sanitizer: DomSanitizer) {}

  ngOnInit(): void {
    this.httpClient.get("https://ivannia-miller-vasquez-default-rtdb.firebaseio.com/canva.json").subscribe((datos:any)=>{
      let url = datos.url
      this.canva = this.sanitizer.bypassSecurityTrustResourceUrl(url+"/view?embed")
    })

    this.httpClient.get("https://ivannia-miller-vasquez-default-rtdb.firebaseio.com/images.json").subscribe((datos:any)=>{
      this.images = datos.filter((f:any) => f);
    })
  }

}
