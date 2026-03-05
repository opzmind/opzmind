import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-services',
  standalone: true,
  imports: [CommonModule],
  template: `
    <section id="services" class="services section-padding">
      <div class="container">
        <div class="section-title text-center">
          <h4 class="gradient-text tracking-wide">OUR EXPERTISE</h4>
          <h2>Services We Provide</h2>
          <p class="section-subtitle">Comprehensive digital solutions engineered for growth, scale, and performance.</p>
        </div>
        
        <div class="services-grid">
          <div class="service-card glass-card" *ngFor="let service of services">
            <div class="service-icon" [innerHTML]="service.icon"></div>
            <h3>{{ service.title }}</h3>
            <p>{{ service.description }}</p>
            <a href="#contact" class="service-link">Learn More <span>→</span></a>
          </div>
        </div>
      </div>
    </section>
  `,
  styles: [`
    .services {
      background-color: var(--surface-color);
      position: relative;
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
      margin-bottom: 1rem;
    }
    
    .section-subtitle {
      color: var(--text-secondary);
      font-size: 1.125rem;
    }
    
    .services-grid {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
      gap: 2rem;
    }
    
    .service-card {
      padding: 2.5rem 2rem;
      display: flex;
      flex-direction: column;
      height: 100%;
      position: relative;
      overflow: hidden;
    }
    
    .service-card::before {
      content: '';
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 4px;
      background: var(--gradient-main);
      transform: scaleX(0);
      transform-origin: left;
      transition: transform var(--transition-normal);
    }
    
    .service-card:hover::before {
      transform: scaleX(1);
    }
    
    .service-icon {
      font-size: 3rem;
      margin-bottom: 1.5rem;
      display: inline-block;
      background: var(--gradient-main);
      -webkit-background-clip: text;
      -webkit-text-fill-color: transparent;
    }
    
    .service-card h3 {
      font-size: 1.5rem;
      margin-bottom: 1rem;
    }
    
    .service-card p {
      color: var(--text-secondary);
      margin-bottom: 1.5rem;
      flex-grow: 1;
    }
    
    .service-link {
      display: inline-flex;
      align-items: center;
      gap: 0.5rem;
      font-weight: 600;
      color: var(--primary-yellow);
      text-decoration: none;
      transition: gap var(--transition-fast);
      margin-top: auto;
    }
    
    .service-link:hover {
      gap: 1rem;
    }
  `]
})
export class ServicesComponent {
  services = [
    {
      icon: '💻',
      title: 'Web Development',
      description: 'Custom, responsive websites built with modern technologies ensuring fast load times and optimal user experiences.'
    },
    {
      icon: '🅰️',
      title: 'Angular Development',
      description: 'Enterprise-grade single-page applications using Angular 17+ with robust architecture and state management.'
    },
    {
      icon: '🎨',
      title: 'UI/UX Design',
      description: 'Stunning interfaces engineered with user-centric design principles, wireframing, and interactive prototyping.'
    },
    {
      icon: '🔌',
      title: 'API Integration',
      description: 'Seamless integration with third-party APIs and custom RESTful or GraphQL backend services.'
    },
    {
      icon: '🛒',
      title: 'E-commerce Solutions',
      description: 'Scalable and secure online stores with optimized checkout flows and payment gateway integrations.'
    },
    {
      icon: '🔍',
      title: 'SEO Optimization',
      description: 'Technical SEO, performance tuning, and structural optimizations to rank higher on search engines.'
    }
  ];
}
