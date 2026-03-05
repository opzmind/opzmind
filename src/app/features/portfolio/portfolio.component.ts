import { Component, computed, signal } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-portfolio',
  standalone: true,
  imports: [CommonModule],
  template: `
    <section id="portfolio" class="portfolio section-padding">
      <div class="container">
        <div class="section-title text-center">
          <h4 class="gradient-text tracking-wide">OUR WORK</h4>
          <h2>Featured Projects</h2>
          <p class="section-subtitle">A showcase of our most recent and impactful digital solutions.</p>
        </div>
        
        <div class="portfolio-filters text-center">
          <button 
            *ngFor="let category of categories" 
            class="filter-btn" 
            [class.active]="activeCategory() === category"
            (click)="setCategory(category)"
          >
            {{ category }}
          </button>
        </div>
        
        <div class="portfolio-grid mt-5">
          <div class="portfolio-item glass-card" *ngFor="let project of filteredProjects()">
            <div class="portfolio-img">
              <div class="placeholder-img">{{ project.title[0] }}</div>
              <div class="portfolio-overlay">
                <a href="#" class="view-btn">View Project</a>
              </div>
            </div>
            <div class="portfolio-content">
              <span class="category-tag">{{ project.category }}</span>
              <h3>{{ project.title }}</h3>
            </div>
          </div>
        </div>
      </div>
    </section>
  `,
  styles: [`
    .text-center {
      text-align: center;
      max-width: 700px;
      margin: 0 auto;
    }
    
    .mt-5 { margin-top: 3rem; }
    
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
      margin-bottom: 3rem;
    }
    
    .portfolio-filters {
      display: flex;
      justify-content: center;
      flex-wrap: wrap;
      gap: 1rem;
      margin-bottom: 3rem;
    }
    
    .filter-btn {
      background: var(--surface-color);
      border: 1px solid var(--border-color);
      color: var(--text-secondary);
      padding: 0.5rem 1.5rem;
      border-radius: 50px;
      font-family: var(--font-heading);
      font-weight: 500;
      cursor: pointer;
      transition: all var(--transition-fast);
    }
    
    .filter-btn:hover {
      color: var(--text-primary);
      border-color: var(--primary-yellow);
    }
    
    .filter-btn.active {
      background: var(--gradient-main);
      color: white;
      border-color: transparent;
      box-shadow: 0 4px 15px rgba(250, 204, 21, 0.4);
    }
    
    .portfolio-grid {
      display: grid;
      grid-template-columns: repeat(auto-fill, minmax(320px, 1fr));
      gap: 2.5rem;
    }
    
    .portfolio-item {
      padding: 0;
      overflow: hidden;
      border-radius: 16px;
    }
    
    .portfolio-img {
      position: relative;
      width: 100%;
      height: 240px;
      overflow: hidden;
    }
    
    .placeholder-img {
      width: 100%;
      height: 100%;
      background: linear-gradient(135deg, var(--surface-color), var(--bg-color));
      display: flex;
      align-items: center;
      justify-content: center;
      font-size: 5rem;
      color: var(--border-color);
      font-weight: 700;
      text-transform: uppercase;
    }
    
    .portfolio-overlay {
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      background: rgba(15, 23, 42, 0.8);
      backdrop-filter: blur(4px);
      -webkit-backdrop-filter: blur(4px);
      display: flex;
      align-items: center;
      justify-content: center;
      opacity: 0;
      transition: opacity var(--transition-normal);
    }
    
    .portfolio-item:hover .portfolio-overlay {
      opacity: 1;
    }
    
    .view-btn {
      background: var(--gradient-main);
      color: white;
      padding: 0.75rem 1.5rem;
      border-radius: 50px;
      font-weight: 600;
      transform: translateY(20px);
      transition: transform var(--transition-normal);
      text-decoration: none;
    }
    
    .portfolio-item:hover .view-btn {
      transform: translateY(0);
    }
    
    .portfolio-content {
      padding: 1.5rem;
    }
    
    .category-tag {
      display: inline-block;
      font-size: 0.75rem;
      font-weight: 600;
      color: var(--primary-yellow);
      text-transform: uppercase;
      letter-spacing: 1px;
      margin-bottom: 0.5rem;
    }
    
    .portfolio-content h3 {
      font-size: 1.25rem;
      margin-bottom: 0;
    }
  `]
})
export class PortfolioComponent {
  categories = ['All', 'Web App', 'E-commerce', 'UI/UX'];

  activeCategory = signal('All');

  projects = signal([
    { title: 'FinTech Dashboard', category: 'Web App' },
    { title: 'Nexus E-Shop', category: 'E-commerce' },
    { title: 'HealthCare Portal UI', category: 'UI/UX' },
    { title: 'Crypto Exchange Platform', category: 'Web App' },
    { title: 'Fashion Retailer Store', category: 'E-commerce' },
    { title: 'AI Analytics Tool', category: 'Web App' }
  ]);

  filteredProjects = computed(() => {
    const category = this.activeCategory();
    if (category === 'All') return this.projects();
    return this.projects().filter(p => p.category === category);
  });

  setCategory(category: string) {
    this.activeCategory.set(category);
  }
}
