import { Component, OnDestroy, OnInit } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'app-about',
  imports: [MatIconModule],
  templateUrl: './about.html',
  styleUrl: './about.css'
})
export class About implements OnInit, OnDestroy{
  gifUrl: string = 'https://www.dropbox.com/scl/fi/bfjp33fcjben0uhs64gz9/video-to-gif-converter.gif?rlkey=byjwl44nm35x5z0o5efn999sg&st=b5s9wtq5&raw=1';
  private loopInterval: any;
  private gifDurationMs: number = 10000;

  ngOnInit(): void {
    this.startGifLoop();
  }

  startGifLoop(): void {
    const originalUrl = this.gifUrl;

    this.loopInterval = setInterval(() => {
      this.gifUrl = originalUrl + '&t=' + new Date().getTime();

    }, this.gifDurationMs);
  }

  ngOnDestroy(): void {
    if (this.loopInterval) {
      clearInterval(this.loopInterval);
    }
  }
}
