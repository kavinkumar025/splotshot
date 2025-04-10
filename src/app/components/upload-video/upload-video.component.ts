import { CommonModule } from '@angular/common';
import { Component, ElementRef, ViewChild } from '@angular/core';
import { FormArray, FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { Firestore, collection, addDoc } from '@angular/fire/firestore';
import { Storage, ref, uploadBytes, getDownloadURL } from '@angular/fire/storage';
import { v4 as uuidv4 } from 'uuid';

@Component({
  selector: 'app-upload-video',
  standalone: true,
  imports: [CommonModule, FormsModule, ReactiveFormsModule],
  templateUrl: './upload-video.component.html',
  styleUrl: './upload-video.component.scss'
})
export class UploadVideoComponent {

  @ViewChild('videoElement') videoElement!: ElementRef<HTMLVideoElement>;

  videoForm: FormGroup;
  zonorList = ['Action', 'Comedy', 'Drama', 'Sci-Fi'];
  roles = ['Director', 'Cameraman', 'Artics', 'Cast'];
  isDragging = false;
  selectedFile: File | null = null;
  videoPreview: string | null = null;
  fileError = '';
  isLoading = false;
  uploadProgress = 0;
  thumbnail: string | null = null;

  constructor(
    private fb: FormBuilder,
    private storage: Storage,
    private firestore: Firestore
  ) {
    this.videoForm = this.fb.group({
      title: ['', Validators.required],
      description: ['', Validators.required],
      zonor: ['', Validators.required],
      phone: ['', [Validators.required, Validators.pattern(/^\d{10}$/)]],
      ageConfirmation: [false, Validators.requiredTrue],
      contributors: this.fb.array([])
    });
  }

  get contributors(): FormArray {
    return this.videoForm.get('contributors') as FormArray;
  }

  addContributor(): void {
    this.contributors.push(this.fb.group({
      name: ['', Validators.required],
      phone: ['', [Validators.required, Validators.pattern(/^\d{10}$/)]],
      email: ['', [Validators.email]],
      instagram: [''],
      role: ['', Validators.required]
    }));
  }

  removeContributor(index: number): void {
    this.contributors.removeAt(index);
  }

  onDragOver(event: DragEvent) {
    event.preventDefault();
    this.isDragging = true;
  }

  onDragLeave(event: DragEvent) {
    event.preventDefault();
    this.isDragging = false;
  }

  onDrop(event: DragEvent) {
    event.preventDefault();
    this.isDragging = false;
    if (event.dataTransfer?.files.length) {
      this.handleFile(event.dataTransfer.files[0]);
    }
  }

  onFileSelected(event: any) {
    const file = event.target.files[0];
    this.handleFile(file);
  }

  handleFile(file: File) {
    if (!file.type.startsWith('video/')) {
      this.fileError = 'Only video files are allowed.';
      return;
    }

    this.selectedFile = file;
    this.fileError = '';
    this.uploadProgress = 1;

    this.videoPreview = URL.createObjectURL(file);
    this.simulateUpload();
  }

  simulateUpload() {
    this.isLoading = true;
    let progress = 1;
    const interval = setInterval(() => {
      if (progress >= 100) {
        clearInterval(interval);
        this.isLoading = false;

        setTimeout(() => {
          this.generateThumbnail();
          if (this.videoElement) {
            this.videoElement.nativeElement.load();
            this.videoElement.nativeElement.play();
          }
        }, 300);
      }
      this.uploadProgress = progress++;
    }, 30);
  }

  generateThumbnail() {
    const video = this.videoElement.nativeElement;
    const canvas = document.createElement('canvas');
    canvas.width = video.videoWidth;
    canvas.height = video.videoHeight;

    video.currentTime = 2;
    setTimeout(() => {
      const ctx = canvas.getContext('2d');
      ctx?.drawImage(video, 0, 0, canvas.width, canvas.height);
      this.thumbnail = canvas.toDataURL('image/jpeg');
    }, 1000);
  }

  async onSubmit() {
    if (!this.selectedFile || !this.thumbnail) {
      this.fileError = 'Please upload a video and wait for thumbnail generation.';
      return;
    }

    try {
      this.isLoading = true;
      const videoId = uuidv4();

      // Upload video to Firebase Storage
      const videoRef = ref(this.storage, `videos/${videoId}`);
      await uploadBytes(videoRef, this.selectedFile);
      const videoURL = await getDownloadURL(videoRef);

      // Upload thumbnail
      const thumbnailBlob = await fetch(this.thumbnail).then(res => res.blob());
      const thumbRef = ref(this.storage, `thumbnails/${videoId}.jpg`);
      await uploadBytes(thumbRef, thumbnailBlob);
      const thumbnailURL = await getDownloadURL(thumbRef);

      // Save metadata to Firestore
      const videosCollection = collection(this.firestore, 'videos');
      await addDoc(videosCollection, {
        ...this.videoForm.value,
        videoURL,
        thumbnailURL,
        createdAt: new Date()
      });

      alert('Video uploaded successfully!');
      this.videoForm.reset();
      this.selectedFile = null;
      this.videoPreview = null;
      this.thumbnail = null;

    } catch (error) {
      console.error('Upload failed:', error);
      alert('Upload failed. Please try again.');
    } finally {
      this.isLoading = false;
    }
  }

}
