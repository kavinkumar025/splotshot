import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';
import { DataBagService } from '../data-bag.service';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {




  // videos = [
  //   { title: 'Vj Siddhu Vlogs - Travel', url: 'https://www.youtube.com/watch?v=t0HaAXvTMP8' },
  //   { title: 'Rick Astley - Never Gonna Give You Up', url: 'https://www.youtube.com/watch?v=dQw4w9WgXcQ' },
  //   { title: 'Luis Fonsi - Despacito', url: 'https://www.youtube.com/watch?v=kJQP7kiw5Fk' },
  //   { title: 'Eminem - Lose Yourself', url: 'https://www.youtube.com/watch?v=3JWTaaS7LdU' },
  //   { title: 'Vj Siddhu Vlogs - Travel', url: 'https://www.youtube.com/watch?v=t0HaAXvTMP8' },
  //   { title: 'Rick Astley - Never Gonna Give You Up', url: 'https://www.youtube.com/watch?v=dQw4w9WgXcQ' },
  //   { title: 'Luis Fonsi - Despacito', url: 'https://www.youtube.com/watch?v=kJQP7kiw5Fk' },
  //   { title: 'Eminem - Lose Yourself', url: 'https://www.youtube.com/watch?v=3JWTaaS7LdU' },
  //   { title: 'Vj Siddhu Vlogs - Travel', url: 'https://www.youtube.com/watch?v=t0HaAXvTMP8' },
  //   { title: 'Rick Astley - Never Gonna Give You Up', url: 'https://www.youtube.com/watch?v=dQw4w9WgXcQ' },
  //   { title: 'Luis Fonsi - Despacito', url: 'https://www.youtube.com/watch?v=kJQP7kiw5Fk' },
  //   { title: 'Eminem - Lose Yourself', url: 'https://www.youtube.com/watch?v=3JWTaaS7LdU' },
  //   { title: 'Vj Siddhu Vlogs - Travel', url: 'https://www.youtube.com/watch?v=t0HaAXvTMP8' },
  //   { title: 'Rick Astley - Never Gonna Give You Up', url: 'https://www.youtube.com/watch?v=dQw4w9WgXcQ' },
  //   { title: 'Luis Fonsi - Despacito', url: 'https://www.youtube.com/watch?v=kJQP7kiw5Fk' },
  //   { title: 'Eminem - Lose Yourself', url: 'https://www.youtube.com/watch?v=3JWTaaS7LdU' },
  //   { title: 'Vj Siddhu Vlogs - Travel', url: 'https://www.youtube.com/watch?v=t0HaAXvTMP8' },
  //   { title: 'Rick Astley - Never Gonna Give You Up', url: 'https://www.youtube.com/watch?v=dQw4w9WgXcQ' },
  //   { title: 'Luis Fonsi - Despacito', url: 'https://www.youtube.com/watch?v=kJQP7kiw5Fk' },
  //   { title: 'Eminem - Lose Yourself', url: 'https://www.youtube.com/watch?v=3JWTaaS7LdU' },
  //   { title: 'Vj Siddhu Vlogs - Travel', url: 'https://www.youtube.com/watch?v=t0HaAXvTMP8' },
  //   { title: 'Rick Astley - Never Gonna Give You Up', url: 'https://www.youtube.com/watch?v=dQw4w9WgXcQ' },
  //   { title: 'Luis Fonsi - Despacito', url: 'https://www.youtube.com/watch?v=kJQP7kiw5Fk' },
  //   { title: 'Eminem - Lose Yourself', url: 'https://www.youtube.com/watch?v=3JWTaaS7LdU' }
  // ].map(video => ({
  //   ...video,
  //   id: this.extractVideoId(video.url) // Extract YouTube Video ID dynamically
  // }));

  // hoveredVideo: any = null;
  // isVideoOpen = false;
  // videoUrl: SafeResourceUrl = '';

  // constructor(public sanitizer: DomSanitizer) { }

  // extractVideoId(url: string): string {
  //   const match = url.match(/[?&]v=([^&]+)/);
  //   return match ? match[1] : '';
  // }

  // getSafeUrl(url: string): SafeResourceUrl {
  //   return this.sanitizer.bypassSecurityTrustResourceUrl(`https://www.youtube.com/embed/${this.extractVideoId(url)}?autoplay=1&rel=0&showinfo=0`);
  // }

  // playHoverVideo(video: any) {
  //   this.hoveredVideo = video;
  // }

  // stopHoverVideo() {
  //   this.hoveredVideo = null;
  // }

  // openFullVideo(video: any) {
  //   this.videoUrl = this.sanitizer.bypassSecurityTrustResourceUrl(
  //     `https://www.youtube.com/embed/${this.extractVideoId(video.url)}?autoplay=1&rel=0&showinfo=1&enablejsapi=1`
  //   );
  //   this.isVideoOpen = true;
  // }

  // closeVideo() {
  //   this.isVideoOpen = false;
  //   this.videoUrl = ''; // Stop video playback
  // }

  // stopClick(event: Event) {
  //   event.stopPropagation(); // Prevent modal from closing when clicking inside
  // }

  // setDefaultThumbnail(event: Event) {
  //   (event.target as HTMLImageElement).src = 'assets/default-thumbnail.jpg';
  // }

  categories: string[] = ['Action', 'Comedy', 'Drama', 'Sci-Fi', 'Thriller'];
  selectedCategory: string | null = null;
  searchQuery: string = '';
  isVideoOpen = false;
  selectedVideo: any = null;

  constructor(
    public dataBag: DataBagService
  ) {

  }

  videos = [
    {
      title: 'Action Movie',
      url: 'https://ik.imagekit.io/ikmedia/videodemo/o/videos%2Ftest-video.mp4?alt=media&token=044352ec-306d-48f9-a93f-a6b034764eac',
      thumbnailUrl: '',
      category: 'Action',
      description: 'An action-packed test video.'
    },
    {
      title: 'Comedy Clip',
      url: 'https://ik.imagekit.io/demo/sample-video.mp4',
      thumbnailUrl: '',
      category: 'Comedy',
      description: 'A hilarious test video.'
    },
    {
      title: 'Sci-Fi Adventure',
      url: 'https://ik.imagekit.io/ikmedia/videodemo/o/videos%2Ftest-video.mp4?alt=media&token=044352ec-306d-48f9-a93f-a6b034764eac',
      thumbnailUrl: '',
      category: 'Sci-Fi',
      description: 'A thrilling sci-fi journey.'
    }
  ];

  filteredVideos = [...this.videos];

  selectCategory(category: string) {
    this.selectedCategory = category;
    this.filterVideos();
  }

  filterVideos(event?: any) {
    this.searchQuery = event ? event.target.value.toLowerCase() : this.searchQuery;
    this.filteredVideos = this.videos.filter(video =>
      (this.selectedCategory ? video.category === this.selectedCategory : true) &&
      (this.searchQuery ? video.title.toLowerCase().includes(this.searchQuery) : true)
    );
  }

  openVideo(video: any) {
    this.selectedVideo = video;
    this.isVideoOpen = true;
    this.dataBag.isDisplayHeader = false;

    // Rotate screen to landscape on mobile
    if (window.innerWidth < 768) {
      const orientation = screen.orientation || (screen as any).mozOrientation || (screen as any).msOrientation;
      if (orientation && orientation.lock) {
        orientation.lock('landscape').catch(() => console.log('Orientation lock not supported.'));
      }
    }
  }

  closeVideo() {
    this.isVideoOpen = false;
    this.dataBag.isDisplayHeader = true;

    // Restore portrait mode on mobile
    if (window.innerWidth < 768) {
      const orientation = screen.orientation || (screen as any).mozOrientation || (screen as any).msOrientation;
      if (orientation && orientation.unlock) {
        orientation.unlock().catch(() => console.log('Orientation unlock not supported.'));
      }
    }
  }

  stopClick(event: Event) {
    event.stopPropagation(); // Prevent modal from closing when clicking inside
  }

}
