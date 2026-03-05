import { Component, OnInit } from '@angular/core';
import { CommonModule, Location } from '@angular/common';
import { ActivatedRoute, RouterModule, Router } from '@angular/router';
import { SERVICES_DATA, ServiceDetail } from '../../core/data/services.data';

@Component({
    selector: 'app-service-detail',
    standalone: true,
    imports: [CommonModule, RouterModule],
    template: `
    <section class="service-detail-page section-padding" *ngIf="service">
      <div class="container">
        
        <button class="back-btn btn btn-outline" (click)="goBack()">
          <span>←</span> Back to Services
        </button>

        <div class="detail-header text-center">
          <div class="service-icon-large" [innerHTML]="service.icon"></div>
          <h1 class="gradient-text tracking-wide">{{ service.title }}</h1>
          <p class="service-tagline">{{ service.shortDescription }}</p>
        </div>

        <div class="detail-content-wrapper">
          <div class="main-content glass-card">
            <h2>Overview</h2>
            <p class="full-desc">{{ service.fullDescription }}</p>
            
            <h3 class="mt-4">Key Benefits & Features</h3>
            <ul class="feature-list">
              <li *ngFor="let feature of service.features">
                <span class="check-icon">✓</span> {{ feature }}
              </li>
            </ul>
          </div>
          
          <div class="sidebar glass-card">
            <div class="sidebar-item">
              <h4>Investment</h4>
              <div class="price-highlight">{{ service.priceRange }}</div>
            </div>
            
            <div class="sidebar-action mt-4">
              <h4>Ready to elevate your business?</h4>
              <p>Contact us today to discuss how we can implement this service for you.</p>
              <a routerLink="/" fragment="contact" class="btn btn-primary full-width">Get a Free Consultation</a>
            </div>
          </div>
        </div>

      </div>
    </section>

    <!-- Fallback if service not found -->
    <section class="service-detail-page section-padding" *ngIf="!service && hasLoaded">
      <div class="container text-center">
        <h2>Service Not Found</h2>
        <p>The service you are looking for does not exist or has been removed.</p>
        <button class="btn btn-primary mt-3" routerLink="/">Return to Home</button>
      </div>
    </section>
  `,
    styles: [`
    .service-detail-page {
      min-height: 80vh;
      padding-top: calc(var(--nav-height) + 4rem);
    }
    
    .back-btn {
      display: inline-flex;
      align-items: center;
      gap: 0.5rem;
      margin-bottom: 2rem;
      padding: 0.5rem 1rem;
      font-size: 0.875rem;
      border: 1px solid var(--border-color);
    }
    .back-btn:hover {
      background: var(--surface-color);
      color: var(--text-primary);
    }
    
    .detail-header {
      margin-bottom: 4rem;
      max-width: 800px;
      margin-left: auto;
      margin-right: auto;
    }
    
    .service-icon-large {
      font-size: 5rem;
      margin-bottom: 1.5rem;
      display: inline-block;
      background: var(--gradient-main);
      -webkit-background-clip: text;
      -webkit-text-fill-color: transparent;
      animation: float 6s ease-in-out infinite;
    }
    
    .detail-header h1 {
      font-size: clamp(2.5rem, 5vw, 4rem);
      margin-bottom: 1rem;
      line-height: 1.2;
    }
    
    .service-tagline {
      font-size: 1.25rem;
      color: var(--text-secondary);
    }
    
    .detail-content-wrapper {
      display: grid;
      grid-template-columns: 2fr 1fr;
      gap: 3rem;
    }
    
    @media (max-width: 992px) {
      .detail-content-wrapper {
        grid-template-columns: 1fr;
      }
    }
    
    .main-content {
      padding: 3rem;
    }
    
    .main-content h2 {
      font-size: 2rem;
      margin-bottom: 1.5rem;
      color: var(--text-primary);
    }
    
    .full-desc {
      font-size: 1.125rem;
      line-height: 1.8;
      color: var(--text-secondary);
      margin-bottom: 2rem;
    }
    
    .main-content h3 {
      font-size: 1.5rem;
      margin-bottom: 1rem;
    }
    
    .feature-list {
      list-style-type: none;
      padding: 0;
    }
    
    .feature-list li {
      display: flex;
      align-items: flex-start;
      gap: 1rem;
      margin-bottom: 1rem;
      font-size: 1.125rem;
      color: var(--text-primary);
      padding: 1rem;
      background: var(--bg-color);
      border-radius: 8px;
      box-shadow: 0 2px 10px rgba(0,0,0,0.1);
    }
    
    .check-icon {
      color: #10b981;
      font-weight: bold;
      font-size: 1.25rem;
      margin-top: -2px;
    }
    
    .sidebar {
      padding: 2.5rem;
      height: fit-content;
      position: sticky;
      top: calc(var(--nav-height) + 2rem);
    }
    
    .sidebar-item h4 {
      font-size: 1.125rem;
      margin-bottom: 0.5rem;
      color: var(--text-secondary);
      text-transform: uppercase;
      letter-spacing: 1px;
    }
    
    .price-highlight {
      font-size: 2rem;
      font-family: var(--font-heading);
      font-weight: 700;
      color: var(--primary-yellow);
      background: var(--bg-color);
      padding: 1rem;
      border-radius: 8px;
      text-align: center;
      border: 1px solid var(--border-color);
    }
    
    .sidebar-action h4 {
      font-size: 1.5rem;
      margin-bottom: 1rem;
      line-height: 1.3;
    }
    
    .sidebar-action p {
      color: var(--text-secondary);
      margin-bottom: 1.5rem;
    }
    
    .mt-3 { margin-top: 1.5rem; }
    .mt-4 { margin-top: 2rem; }
    .text-center { text-align: center; }
    .full-width { width: 100%; display: block; text-align: center; }
  `]
})
export class ServiceDetailComponent implements OnInit {
    service: ServiceDetail | undefined;
    hasLoaded = false;

    constructor(
        private route: ActivatedRoute,
        private router: Router,
        private location: Location
    ) { }

    ngOnInit(): void {
        window.scrollTo(0, 0); // Scroll to top on load

        this.route.paramMap.subscribe(params => {
            const id = params.get('id');
            if (id) {
                this.service = SERVICES_DATA.find(s => s.id === id);
            }
            this.hasLoaded = true;
        });
    }

    goBack(): void {
        // If the user came from within the site, go back normally
        if (window.history.length > 1) {
            this.location.back();
        } else {
            // If they landed directly on the page, route to home
            this.router.navigate(['/']);
        }
    }
}
