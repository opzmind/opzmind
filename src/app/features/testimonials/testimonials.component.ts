import { Component, signal, OnDestroy, PLATFORM_ID, inject } from '@angular/core';
import { CommonModule, isPlatformBrowser } from '@angular/common';

@Component({
  selector: 'app-testimonials',
  standalone: true,
  imports: [CommonModule],
  template: `
    <section id="testimonials" class="testimonials section-padding">
      <div class="container">
        <div class="section-title text-center">
          <h4 class="gradient-text tracking-wide">TESTIMONIALS</h4>
          <h2>What Our Clients Say</h2>
        </div>
        
        <div class="testimonial-slider">
          <div class="slider-wrapper" [style.transform]="'translateX(-' + (currentIndex() * 100) + '%)'">
            <div class="testimonial-slide glass-card" *ngFor="let t of testimonials">
              <div class="quote-icon">"</div>
              <p class="review-text">{{ t.review }}</p>
              <div class="client-info">
                <div class="client-img">{{ t.name[0] }}</div>
                <div>
                  <h4 class="client-name">{{ t.name }}</h4>
                  <p class="client-role">{{ t.role }}</p>
                </div>
              </div>
            </div>
          </div>
          
          <div class="slider-controls">
            <button class="control-btn" (click)="prev()">←</button>
            <div class="dots">
              <span 
                *ngFor="let t of testimonials; let i = index" 
                class="dot" 
                [class.active]="i === currentIndex()"
                (click)="goTo(i)"
              ></span>
            </div>
            <button class="control-btn" (click)="next()">→</button>
          </div>
        </div>
      </div>
    </section>
  `,
  styles: [`
    .testimonials {
      background-color: var(--surface-color);
    }
    
    .text-center {
      text-align: center;
      max-width: 700px;
      margin: 0 auto 4rem auto;
    }
    
    .section-title h4 {
      font-size: 0.875rem;
      margin-bottom: 0.5rem;
      letter-spacing: 2px;
      font-weight: 600;
      text-transform: uppercase;
    }
    
    .section-title h2 {
      font-size: clamp(2rem, 4vw, 3rem);
    }
    
    .testimonial-slider {
      max-width: 800px;
      margin: 0 auto;
      overflow: hidden;
      position: relative;
    }
    
    .slider-wrapper {
      display: flex;
      transition: transform 0.5s ease-in-out;
    }
    
    .testimonial-slide {
      min-width: 100%;
      padding: 3rem;
      text-align: center;
      position: relative;
      border-radius: 16px;
    }
    
    .quote-icon {
      font-size: 6rem;
      font-family: serif;
      color: var(--primary-yellow);
      // opacity: 0.2; /* To be safe with contrast */
      color: rgba(250, 204, 21, 0.2);
      position: absolute;
      top: 1rem;
      left: 2rem;
      line-height: 1;
    }
    
    .review-text {
      font-size: 1.25rem;
      font-style: italic;
      margin-bottom: 2.5rem;
      position: relative;
      z-index: 1;
    }
    
    .client-info {
      display: flex;
      align-items: center;
      justify-content: center;
      gap: 1rem;
    }
    
    .client-img {
      width: 60px;
      height: 60px;
      border-radius: 50%;
      background: var(--gradient-main);
      color: white;
      display: flex;
      align-items: center;
      justify-content: center;
      font-size: 1.5rem;
      font-weight: 700;
    }
    
    .client-name {
      font-size: 1.125rem;
      margin-bottom: 0.25rem;
      text-align: left;
    }
    
    .client-role {
      color: var(--text-secondary);
      font-size: 0.875rem;
      text-align: left;
    }
    
    .slider-controls {
      display: flex;
      align-items: center;
      justify-content: center;
      gap: 2rem;
      margin-top: 2rem;
    }
    
    .control-btn {
      background: var(--surface-color);
      border: 1px solid var(--border-color);
      color: var(--text-primary);
      width: 40px;
      height: 40px;
      border-radius: 50%;
      cursor: pointer;
      display: flex;
      align-items: center;
      justify-content: center;
      font-size: 1.25rem;
      transition: all var(--transition-fast);
    }
    
    .control-btn:hover {
      background: var(--primary-yellow);
      color: var(--primary-dark);
      border-color: var(--primary-yellow);
    }
    
    .dots {
      display: flex;
      gap: 0.5rem;
    }
    
    .dot {
      width: 10px;
      height: 10px;
      border-radius: 50%;
      background: var(--border-color);
      cursor: pointer;
      transition: all var(--transition-fast);
    }
    
    .dot.active {
      background: var(--primary-yellow);
      transform: scale(1.3);
    }
  `]
})
export class TestimonialsComponent implements OnDestroy {
  testimonials = [
    {
      review: 'opzmind completely transformed our online presence. Their expertise and attention to modern design helped us increase conversions by 150% in just two months.',
      name: 'Sarah Johnson',
      role: 'CMO, TechNova'
    },
    {
      review: 'Working with them was an absolute pleasure. They delivered our complex e-commerce platform ahead of schedule with zero bugs. Truly highly recommended team.',
      name: 'Michael Chen',
      role: 'Founder, RetailPro'
    },
    {
      review: 'The design quality is outstanding! The glassmorphism effects and smooth animations make our web app feel incredibly premium. Our users love the dark mode feature.',
      name: 'Elena Rodriguez',
      role: 'Product Manager, FinTech Solutions'
    }
  ];

  currentIndex = signal(0);
  private intervalId: any;
  private platformId = inject(PLATFORM_ID);

  constructor() {
    if (isPlatformBrowser(this.platformId)) {
      this.startAutoPlay();
    }
  }

  next() {
    this.currentIndex.update(i => (i + 1) % this.testimonials.length);
  }

  prev() {
    this.currentIndex.update(i => i === 0 ? this.testimonials.length - 1 : i - 1);
  }

  goTo(index: number) {
    this.currentIndex.set(index);
  }

  startAutoPlay() {
    this.intervalId = setInterval(() => {
      this.next();
    }, 5000);
  }

  ngOnDestroy() {
    if (this.intervalId) {
      clearInterval(this.intervalId);
    }
  }
}
