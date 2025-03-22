import { CommonModule } from '@angular/common';
import { Component, ElementRef, ViewChild } from '@angular/core';
import { FormArray, FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';

@Component({
  selector: 'app-upload-video',
  standalone: true,
  imports: [CommonModule,FormsModule, ReactiveFormsModule],
  templateUrl: './upload-video.component.html',
  styleUrl: './upload-video.component.scss'
})
export class UploadVideoComponent {

    @ViewChild('videoElement') videoElement!: ElementRef<HTMLVideoElement>;
  
    videoForm: FormGroup;
    zonorList: string[] = ['Action', 'Comedy', 'Drama', 'Sci-Fi'];
    isDragging = false;
    selectedFile: File | null = null;
    videoPreview: string | null = null;
    fileError: string = '';
    isLoading = false;
    uploadProgress = 0;
  
    constructor(private fb: FormBuilder) {
      this.videoForm = this.fb.group({
        title: ['', Validators.required],
        description: ['', Validators.required],
        zonor: ['', Validators.required],
        ageConfirmation: [false, Validators.requiredTrue],
      });
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
  
      // ✅ Fix: Use URL.createObjectURL for large files
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
          
          // ✅ Fix: Auto-play video after loading completes
          setTimeout(() => {
            if (this.videoElement) {
              this.videoElement.nativeElement.load();
              this.videoElement.nativeElement.play();
            }
          }, 500);
        }
        this.uploadProgress = progress++;
      }, 50);
    }
  
    onSubmit() {
      console.log('Form Data:', this.videoForm.value);
    }

    get departments(): FormArray {
      return this.videoForm.get('departments') as FormArray;
    }
    
    addDepartment(): void {
      this.departments.push(this.fb.group({
        name: ['', Validators.required],
        role: ['', Validators.required],
        phone: ['', [Validators.required, Validators.pattern(/^\d{10}$/)]],
        instagram: [''],
        zonor: ['', Validators.required]
      }));
    }
    
    removeDepartment(index: number): void {
      this.departments.removeAt(index);
    }
    
  }
  