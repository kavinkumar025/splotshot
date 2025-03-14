import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormArray, FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';

@Component({
  selector: 'app-upload-video',
  standalone: true,
  imports: [CommonModule,FormsModule, ReactiveFormsModule],
  templateUrl: './upload-video.component.html',
  styleUrl: './upload-video.component.scss'
})
export class UploadVideoComponent {


  
    videoForm: FormGroup;
    isLoading: boolean = false;
    videoPreview: string | null = null;
    fileError = '';
    selectedFile: File | null = null;
    isDragging: boolean = false;
  
    zonorList = ['Action', 'Comedy', 'Crime', 'Thriller', 'Drama', 'Horror', 'Sci-Fi', 'Adventure', 'Fantasy'];
  
    constructor(private fb: FormBuilder) {
      this.videoForm = this.fb.group({
        title: ['', Validators.required],
        description: ['', Validators.required],
        ageConfirmation: [false, Validators.requiredTrue],
        videoFile: [null, Validators.required],
        departments: this.fb.array([this.createDepartmentField()])
      });
    }
  
    get departments(): FormArray {
      return this.videoForm.get('departments') as FormArray;
    }
  
    createDepartmentField(): FormGroup {
      return this.fb.group({
        name: ['', Validators.required],
        role: ['', Validators.required],
        phone: ['', [Validators.required, Validators.pattern('^[0-9]{10}$')]],
        instagram: [''],
        zonor: ['', Validators.required]
      });
    }
  
    addDepartment() {
      this.departments.push(this.createDepartmentField());
    }
  
    removeDepartment(index: number) {
      this.departments.removeAt(index);
    }
  
    onFileSelected(event: any) {
      const file: File = event.target.files[0];
      if (file) {
        const allowedFormats = ['video/mp4', 'video/mov', 'video/avi', 'video/wmv', 'video/mkv', 'video/flv', 'video/webm'];
        
        if (!allowedFormats.includes(file.type)) {
          this.fileError = "Only video files (MP4, MOV, AVI, WMV, MKV, FLV, WEBM) are allowed!";
          event.target.value = ''; // Clear the input field
          return;
        }
        
        this.fileError = '';
        this.selectedFile = file;
    
        // Generate preview only for supported formats (excluding MKV)
        if (file.type !== 'video/x-matroska') {
          const reader = new FileReader();
          reader.onload = () => {
            this.videoPreview = reader.result as string;
          };
          reader.readAsDataURL(file);
        } else {
          this.videoPreview = null; // No preview for MKV
        }
      }
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
  
      const file = event.dataTransfer?.files[0];
      if (file) {
        this.processFile(file);
      }
    }
  
    processFile(file: File) {
      const allowedFormats = ['video/mp4', 'video/mov', 'video/avi', 'video/wmv', 'video/mkv', 'video/flv', 'video/webm'];
  
      if (!allowedFormats.includes(file.type)) {
        this.fileError = "Only video files (MP4, MOV, AVI, WMV, MKV, FLV, WEBM) are allowed!";
        return;
      }
  
      this.fileError = '';
      this.selectedFile = file;
  
      // Generate a preview
      const reader = new FileReader();
      reader.onload = () => {
        this.videoPreview = reader.result as string;
      };
      reader.readAsDataURL(file);
    }
  
    onSubmit() {
      if (this.videoForm.invalid) {
        alert('Please fill in all required fields.');
        return;
      }
  
      this.isLoading = true;
  
      setTimeout(() => {
        this.isLoading = false;
        alert('Video uploaded successfully!');
        this.videoForm.reset();
        this.videoPreview = null;
      }, 3000);
    }
  
  



}
