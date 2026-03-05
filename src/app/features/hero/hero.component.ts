import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-hero',
  standalone: true,
  imports: [CommonModule],
  template: `
    <section id="hero" class="hero d-flex align-items-center">
      <div class="hero-bg">
        <div class="glow-sphere sphere-1"></div>
        <div class="glow-sphere sphere-2"></div>
      </div>
      
      <div class="container relative z-10">
        <div class="hero-content">
          <div class="badge animate-fade-in" style="animation-delay: 0.1s">
            <span class="badge-dot"></span> Next-Gen Web Solutions
          </div>
          
          <h1 class="hero-title animate-fade-in" style="animation-delay: 0.2s">
            Transforming Ideas into <br>
            <span class="gradient-text type-effect">Digital Excellence</span>
          </h1>
          
          <p class="hero-subtitle animate-fade-in" style="animation-delay: 0.3s">
            We build modern, scalable, and high-converting web applications that drive real business growth. Expert Angular development meets stunning UI/UX design.
          </p>
          
          <div class="hero-actions animate-fade-in" style="animation-delay: 0.4s">
            <a href="#contact" class="btn btn-primary btn-lg">Get Started</a>
            <a href="#portfolio" class="btn btn-outline btn-lg ml-3">View Portfolio</a>
          </div>
          
          <div class="hero-stats animate-fade-in" style="animation-delay: 0.5s">
            <div class="stat-item">
              <h3 class="stat-value">50+</h3>
              <p class="stat-label">Projects Delivered</p>
            </div>
            <div class="stat-item">
              <h3 class="stat-value">99%</h3>
              <p class="stat-label">Client Satisfaction</p>
            </div>
            <div class="stat-item">
              <h3 class="stat-value">24/7</h3>
              <p class="stat-label">Premium Support</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  `,
  styles: [`
    .hero {
      min-height: 100vh;
      display: flex;
      align-items: center;
      position: relative;
      overflow: hidden;
      padding-top: 80px;
    }
    
    .hero-bg {
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      z-index: 0;
      overflow: hidden;
    }
    
    .glow-sphere {
      position: absolute;
      border-radius: 50%;
      filter: blur(100px);
      opacity: 0.4;
      z-index: 0;
    }
    
    .sphere-1 {
      width: 500px;
      height: 500px;
      background: var(--primary-yellow);
      top: -100px;
      left: -100px;
      animation: float 10s infinite alternate;
    }
    
    .sphere-2 {
      width: 400px;
      height: 400px;
      background: #ffffff;
      bottom: -50px;
      right: -50px;
      animation: float 12s infinite alternate-reverse;
    }
    
    @keyframes float {
      0% { transform: translate(0, 0); }
      100% { transform: translate(50px, 50px); }
    }
    
    .relative { position: relative; }
    .z-10 { z-index: 10; }
    
    .hero-content {
      max-width: 800px;
    }
    
    .badge {
      display: inline-flex;
      align-items: center;
      padding: 0.5rem 1rem;
      border-radius: 50px;
      background: var(--glass-bg);
      border: 1px solid var(--glass-border);
      font-size: 0.875rem;
      font-weight: 500;
      margin-bottom: 1.5rem;
      color: var(--text-primary);
      box-shadow: var(--glass-shadow);
      opacity: 0;
    }
    
    .badge-dot {
      width: 8px;
      height: 8px;
      border-radius: 50%;
      background: var(--primary-yellow);
      margin-right: 0.5rem;
      box-shadow: 0 0 10px var(--primary-yellow);
    }
    
    .hero-title {
      font-size: clamp(2.5rem, 5vw, 4.5rem);
      line-height: 1.1;
      margin-bottom: 1.5rem;
      opacity: 0;
    }
    
    .hero-subtitle {
      font-size: 1.125rem;
      color: var(--text-secondary);
      margin-bottom: 2.5rem;
      max-width: 600px;
      opacity: 0;
    }
    
    .hero-actions {
      display: flex;
      gap: 1rem;
      margin-bottom: 4rem;
      opacity: 0;
    }
    
    .btn-lg {
      padding: 1rem 2rem;
      font-size: 1.125rem;
    }
    
    .ml-3 { margin-left: 1rem; }
    
    .hero-stats {
      display: flex;
      gap: 3rem;
      opacity: 0;
      border-top: 1px solid var(--border-color);
      padding-top: 2rem;
    }
    
    .stat-value {
      font-size: 2rem;
      font-weight: 700;
      color: var(--text-primary);
      margin-bottom: 0.25rem;
    }
    
    .stat-label {
      font-size: 0.875rem;
      color: var(--text-secondary);
      text-transform: uppercase;
      letter-spacing: 1px;
    }
    
    @media (max-width: 768px) {
      .hero-actions {
        flex-direction: column;
      }
      .hero-actions .btn {
        width: 100%;
      }
      .ml-3 { margin-left: 0; margin-top: 1rem; }
      .hero-stats {
        flex-direction: column;
        gap: 1.5rem;
      }
    }
  `]
})
export class HeroComponent { }
