import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {




  videos = [
    { title: 'Vj Siddhu Vlogs - Travel', url: 'https://www.youtube.com/watch?v=t0HaAXvTMP8' },
    { title: 'Rick Astley - Never Gonna Give You Up', url: 'https://www.youtube.com/watch?v=dQw4w9WgXcQ' },
    { title: 'Luis Fonsi - Despacito', url: 'https://www.youtube.com/watch?v=kJQP7kiw5Fk' },
    { title: 'Eminem - Lose Yourself', url: 'https://www.youtube.com/watch?v=3JWTaaS7LdU' },
    { title: 'Vj Siddhu Vlogs - Travel', url: 'https://www.youtube.com/watch?v=t0HaAXvTMP8' },
    { title: 'Rick Astley - Never Gonna Give You Up', url: 'https://www.youtube.com/watch?v=dQw4w9WgXcQ' },
    { title: 'Luis Fonsi - Despacito', url: 'https://www.youtube.com/watch?v=kJQP7kiw5Fk' },
    { title: 'Eminem - Lose Yourself', url: 'https://www.youtube.com/watch?v=3JWTaaS7LdU' },
    { title: 'Vj Siddhu Vlogs - Travel', url: 'https://www.youtube.com/watch?v=t0HaAXvTMP8' },
    { title: 'Rick Astley - Never Gonna Give You Up', url: 'https://www.youtube.com/watch?v=dQw4w9WgXcQ' },
    { title: 'Luis Fonsi - Despacito', url: 'https://www.youtube.com/watch?v=kJQP7kiw5Fk' },
    { title: 'Eminem - Lose Yourself', url: 'https://www.youtube.com/watch?v=3JWTaaS7LdU' },
    { title: 'Vj Siddhu Vlogs - Travel', url: 'https://www.youtube.com/watch?v=t0HaAXvTMP8' },
    { title: 'Rick Astley - Never Gonna Give You Up', url: 'https://www.youtube.com/watch?v=dQw4w9WgXcQ' },
    { title: 'Luis Fonsi - Despacito', url: 'https://www.youtube.com/watch?v=kJQP7kiw5Fk' },
    { title: 'Eminem - Lose Yourself', url: 'https://www.youtube.com/watch?v=3JWTaaS7LdU' },
    { title: 'Vj Siddhu Vlogs - Travel', url: 'https://www.youtube.com/watch?v=t0HaAXvTMP8' },
    { title: 'Rick Astley - Never Gonna Give You Up', url: 'https://www.youtube.com/watch?v=dQw4w9WgXcQ' },
    { title: 'Luis Fonsi - Despacito', url: 'https://www.youtube.com/watch?v=kJQP7kiw5Fk' },
    { title: 'Eminem - Lose Yourself', url: 'https://www.youtube.com/watch?v=3JWTaaS7LdU' },
    { title: 'Vj Siddhu Vlogs - Travel', url: 'https://www.youtube.com/watch?v=t0HaAXvTMP8' },
    { title: 'Rick Astley - Never Gonna Give You Up', url: 'https://www.youtube.com/watch?v=dQw4w9WgXcQ' },
    { title: 'Luis Fonsi - Despacito', url: 'https://www.youtube.com/watch?v=kJQP7kiw5Fk' },
    { title: 'Eminem - Lose Yourself', url: 'https://www.youtube.com/watch?v=3JWTaaS7LdU' }
  ].map(video => ({
    ...video,
    id: this.extractVideoId(video.url) // Extract YouTube Video ID dynamically
  }));

  hoveredVideo: any = null;
  isVideoOpen = false;
  videoUrl: SafeResourceUrl = '';

  constructor(public sanitizer: DomSanitizer) { }

  extractVideoId(url: string): string {
    const match = url.match(/[?&]v=([^&]+)/);
    return match ? match[1] : '';
  }

  getSafeUrl(url: string): SafeResourceUrl {
    return this.sanitizer.bypassSecurityTrustResourceUrl(`https://www.youtube.com/embed/${this.extractVideoId(url)}?autoplay=1&rel=0&showinfo=0`);
  }

  playHoverVideo(video: any) {
    this.hoveredVideo = video;
  }

  stopHoverVideo() {
    this.hoveredVideo = null;
  }

  openFullVideo(video: any) {
    this.videoUrl = this.sanitizer.bypassSecurityTrustResourceUrl(
      `https://www.youtube.com/embed/${this.extractVideoId(video.url)}?autoplay=1&rel=0&showinfo=1&enablejsapi=1`
    );
    this.isVideoOpen = true;
  }

  closeVideo() {
    this.isVideoOpen = false;
    this.videoUrl = ''; // Stop video playback
  }

  stopClick(event: Event) {
    event.stopPropagation(); // Prevent modal from closing when clicking inside
  }

  setDefaultThumbnail(event: Event) {
    (event.target as HTMLImageElement).src = 'assets/default-thumbnail.jpg';
  }



}
