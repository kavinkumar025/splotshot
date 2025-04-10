import { ApplicationConfig, importProvidersFrom } from '@angular/core';
import { provideRouter } from '@angular/router';
import { provideClientHydration } from '@angular/platform-browser';
import { provideZoneChangeDetection } from '@angular/core';
import { routes } from './app.routes';
import { initializeApp } from 'firebase/app';
import { provideFirebaseApp } from '@angular/fire/app';
import { getAuth } from 'firebase/auth';
import { provideAuth } from '@angular/fire/auth';
import { provideStorage, getStorage } from '@angular/fire/storage';
import { provideFirestore, getFirestore } from '@angular/fire/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyCVLN6s70uLbXI7px8ishct32JDXtGGLq4",
  authDomain: "social-media-995d9.firebaseapp.com",
  projectId: "social-media-995d9",
  storageBucket: "social-media-995d9.firebasestorage.app",
  messagingSenderId: "177622635042",
  appId: "1:177622635042:web:6619ca99751856fe0e307b",
  measurementId: "G-JXS8720E94"
}

export const appConfig: ApplicationConfig = {
  providers: [
    provideZoneChangeDetection({ eventCoalescing: true }),
    provideRouter(routes),
    provideClientHydration(),
    importProvidersFrom(
      provideFirebaseApp(() => initializeApp(firebaseConfig)),
      provideAuth(() => getAuth()),
      provideStorage(() => getStorage()),
      provideFirestore(() => getFirestore())
    )
  ]
};
