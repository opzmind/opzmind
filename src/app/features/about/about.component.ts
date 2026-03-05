import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-about',
  standalone: true,
  imports: [CommonModule],
  template: `
    <section id="about" class="about section-padding">
      <div class="container">
        <div class="about-grid">
          <div class="about-content">
            <div class="section-title">
              <h4 class="gradient-text tracking-wide">ABOUT US</h4>
              <h2>We Build Digital Experiences That Matter</h2>
            </div>
            
            <p class="about-desc">
              opzmind is your dedicated digital growth partner. We specialize in building a powerful online presence through complete website development, local SEO strategies, SaaS solutions, and comprehensive digital packages designed to elevate your business.
            </p>
            
            <div class="mission-vision">
              <div class="glass-card mb-4">
                <div class="icon-wrapper">
                  <span>🎯</span>
                </div>
                <div>
                  <h3>Our Mission</h3>
                  <p>To empower small businesses and professionals with accessible, high-performing digital strategies that drive real-world visibility and sustainable growth.</p>
                </div>
              </div>
              
              <div class="glass-card">
                <div class="icon-wrapper">
                  <span>👁️</span>
                </div>
                <div>
                  <h3>Our Vision</h3>
                  <p>To become the most trusted digital partner for businesses, offering an all-in-one ecosystem for lasting online success.</p>
                </div>
              </div>
            </div>
          </div>
          
          <div class="about-features">
            <h3 class="mb-4" style="text-align: center;">Why Choose Us</h3>
            <div class="features-grid">
              
              <div class="feature-item glass-card">
                <div class="feature-icon text-gradient">🚀</div>
                <h4>Increased Visibility</h4>
                <p>Gain local traction with our proven optimization and digital presence strategies.</p>
              </div>
              
              <div class="feature-item glass-card">
                <div class="feature-icon text-gradient">🛠️</div>
                <h4>Custom Solutions</h4>
                <p>From modern SaaS tools to personalized portfolios, we build exactly what you need.</p>
              </div>
              
              <div class="feature-item glass-card">
                <div class="feature-icon text-gradient">💻</div>
                <h4>Modern Tech</h4>
                <p>We craft lightning-fast web experiences ensuring smooth performance on all devices.</p>
              </div>
              
              <div class="feature-item glass-card">
                <div class="feature-icon text-gradient">🎧</div>
                <h4>Ongoing Support</h4>
                <p>Reliable maintenance and dedicated support to keep your operations running flawlessly.</p>
              </div>
              
            </div>
          </div>
        </div>
      </div>
    </section>
  `,
  styles: [`
    .about-grid {
      display: grid;
      grid-template-columns: 1fr 1fr;
      gap: 4rem;
      align-items: center;
    }
    
    @media (max-width: 992px) {
      .about-grid {
        grid-template-columns: 1fr;
      }
    }
    
    .section-title {
      margin-bottom: 2rem;
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
    
    .about-desc {
      color: var(--text-secondary);
      font-size: 1.125rem;
      margin-bottom: 2rem;
    }
    
    .mission-vision {
      display: flex;
      flex-direction: column;
      gap: 1.5rem;
    }
    
    .mission-vision .glass-card {
      display: flex;
      gap: 1.5rem;
      align-items: flex-start;
      padding: 1.5rem;
    }
    
    .icon-wrapper {
      width: 50px;
      height: 50px;
      border-radius: 12px;
      background: var(--gradient-main);
      display: flex;
      align-items: center;
      justify-content: center;
      font-size: 1.5rem;
      flex-shrink: 0;
    }
    
    .mission-vision h3 {
      font-size: 1.25rem;
      margin-bottom: 0.5rem;
    }
    
    .mission-vision p {
      color: var(--text-secondary);
      font-size: 0.95rem;
    }
    
    .mb-4 { margin-bottom: 1.5rem; }
    
    .features-grid {
      display: grid;
      grid-template-columns: 1fr 1fr;
      gap: 1.5rem;
    }
    
    .feature-item {
      padding: 1.5rem;
      text-align: center;
      display: flex;
      flex-direction: column;
      align-items: center;
    }
    
    .feature-icon {
      font-size: 2.5rem;
      margin-bottom: 1rem;
    }
    
    .text-gradient {
      background: var(--gradient-main);
      -webkit-background-clip: text;
      -webkit-text-fill-color: transparent;
    }
    
    .feature-item h4 {
      font-size: 1.125rem;
      margin-bottom: 0.5rem;
    }
    
    .feature-item p {
      color: var(--text-secondary);
      font-size: 0.875rem;
    }
    
    @media (max-width: 576px) {
      .features-grid {
        grid-template-columns: 1fr;
      }
    }
  `]
})
export class AboutComponent { }
