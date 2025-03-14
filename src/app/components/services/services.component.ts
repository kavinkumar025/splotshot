import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-services',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './services.component.html',
  styleUrl: './services.component.scss'
})
export class ServicesComponent {
  faqs = [
    { question: 'What is SplotShot?', answer: 'SplotShot is a platform for talented directors to showcase their work publicly.' },
    { question: 'How much does SplotShot cost?', answer: 'Regular users can watch for free, while creator users can upload short films for ₹150/month.' },
    { question: 'Where can I watch?', answer: 'You can access SplotShot on any device with an internet connection.' },
    { question: 'How do I cancel?', answer: 'You can cancel your creator subscription anytime in your account settings.' },
    { question: 'What can I watch on SplotShot?', answer: 'Watch high-quality short films from emerging and professional directors.' },
    { question: 'Is SplotShot good for creators?', answer: 'Yes! Creators can showcase their work and get reviews from professional directors.' }
  ];

  activeIndex: number | null = null;

  toggleFAQ(index: number) {
    this.activeIndex = this.activeIndex === index ? null : index;
  }
}
