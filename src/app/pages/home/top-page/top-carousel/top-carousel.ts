import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-top-carousel',
  imports: [CommonModule],
  templateUrl: './top-carousel.html',
  styleUrl: './top-carousel.css'
})
export class TopCarousel {
  logos = [
    { src: "https://www.dropbox.com/scl/fi/6r9ujnucauetegr6dsgs8/milHojas.png?rlkey=pfjj500xe8er4a7clrtzurmef&st=5mx8ldvy&raw=1", url: "https://link1.com", alt: "Restaurant Milhojas" },
    { src: "https://www.dropbox.com/scl/fi/970wmop2hb0ys7g9so34f/CorporationFont.webp?rlkey=zaf383zqgcaqkswk7qznlu8f6&st=pi64tfzi&raw=1", url: "https://link2.com", alt: "Corporation Font" },
    { src: "https://www.dropbox.com/scl/fi/iyqx1ggn66diyahnr7mey/baby.webp?rlkey=nla7nnwe9zgupywi1ui9c7nln&st=bf8ua5ol&raw=1", url: "https://link2.com", alt: "Evento Baby Shower" },
    { src: "https://www.dropbox.com/scl/fi/307nczw2yne9gss3twtyp/2do.webp?rlkey=g7hpgot0fmtlgchxzrfx5bguf&st=i001v25e&raw=1", url: "https://link2.com", alt: "¡2nd-Chance!" },
  ];

  pause() {
    const track = document.querySelector('.slide-track') as HTMLElement;
    track.style.animationPlayState = 'paused';
  }

  play() {
    const track = document.querySelector('.slide-track') as HTMLElement;
    track.style.animationPlayState = 'running';
  }

  goTo(url: string) {
    window.open(url, "_blank");
  }
}
