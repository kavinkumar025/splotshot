import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { DataBagService } from '../data-bag.service';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {

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
      url: 'https://ik.imagekit.io/demo/sample-video.mp4?tr=f-webm,q-10',
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
    },
    {
      title: 'Action Movie',
      url: 'https://ik.imagekit.io/ikmedia/videodemo/o/videos%2Ftest-video.mp4?alt=media&token=044352ec-306d-48f9-a93f-a6b034764eac',
      thumbnailUrl: '',
      category: 'Action',
      description: 'An action-packed test video.'
    },
    {
      title: 'Comedy Clip',
      url: 'https://ik.imagekit.io/demo/sample-video.mp4?tr=f-webm,q-10',
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
    },
    {
      title: 'Action Movie',
      url: 'https://ik.imagekit.io/ikmedia/videodemo/o/videos%2Ftest-video.mp4?alt=media&token=044352ec-306d-48f9-a93f-a6b034764eac',
      thumbnailUrl: '',
      category: 'Action',
      description: 'An action-packed test video.'
    },
    {
      title: 'Comedy Clip',
      url: 'https://ik.imagekit.io/demo/sample-video.mp4?tr=f-webm,q-10',
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
    },
    {
      title: 'Action Movie',
      url: 'https://ik.imagekit.io/ikmedia/videodemo/o/videos%2Ftest-video.mp4?alt=media&token=044352ec-306d-48f9-a93f-a6b034764eac',
      thumbnailUrl: '',
      category: 'Action',
      description: 'An action-packed test video.'
    },
    {
      title: 'Comedy Clip',
      url: 'https://ik.imagekit.io/demo/sample-video.mp4?tr=f-webm,q-10',
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
    },
    {
      title: 'Action Movie',
      url: 'https://ik.imagekit.io/ikmedia/videodemo/o/videos%2Ftest-video.mp4?alt=media&token=044352ec-306d-48f9-a93f-a6b034764eac',
      thumbnailUrl: '',
      category: 'Action',
      description: 'An action-packed test video.'
    },
    {
      title: 'Comedy Clip',
      url: 'https://ik.imagekit.io/demo/sample-video.mp4?tr=f-webm,q-10',
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
    },
    {
      title: 'Action Movie',
      url: 'https://ik.imagekit.io/ikmedia/videodemo/o/videos%2Ftest-video.mp4?alt=media&token=044352ec-306d-48f9-a93f-a6b034764eac',
      thumbnailUrl: '',
      category: 'Action',
      description: 'An action-packed test video.'
    },
    {
      title: 'Comedy Clip',
      url: 'https://ik.imagekit.io/demo/sample-video.mp4?tr=f-webm,q-10',
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

  likesMap = new Map<number, number>();
  commentsMap = new Map<number, string[]>();

  selectCategory(category: string) {
    this.selectedCategory = category;
    this.filterVideos();
  }

  filterVideos(event?: any) {
    this.searchQuery = event ? event.target.value.toLowerCase() : this.searchQuery;
    this.filteredVideos = this.videos.filter(video =>
      (!this.selectedCategory || video.category === this.selectedCategory) &&
      (!this.searchQuery || video.title.toLowerCase().includes(this.searchQuery))
    );
  }

  openVideo(video: any) {
    this.selectedVideo = video;
    this.isVideoOpen = true;

    if (!this.likesMap.has(video.id)) this.likesMap.set(video.id, 0);
    if (!this.commentsMap.has(video.id)) this.commentsMap.set(video.id, []);
  }

  closeVideo() {
    this.isVideoOpen = false;
    this.selectedVideo = null;
  }

  likeVideo(videoId: number) {
    const current = this.likesMap.get(videoId) || 0;
    this.likesMap.set(videoId, current + 1);
  }

  addComment(videoId: number, comment: string) {
    if (comment.trim()) {
      const comments = this.commentsMap.get(videoId) || [];
      comments.push(comment);
      this.commentsMap.set(videoId, comments);
    }
  }

  shareVideo(video: any) {
    navigator.clipboard.writeText(video.url).then(() => {
      alert('Video URL copied to clipboard!');
    });
  }

  castScreen() {
    alert('Cast screen feature coming soon...');
  }

  getLikes(videoId: number): number {
    return this.likesMap.get(videoId) || 0;
  }

  getComments(videoId: number): string[] {
    return this.commentsMap.get(videoId) || [];
  }
}
