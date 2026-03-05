import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [CommonModule, RouterModule],
  template: `
    <footer class="footer">
      <div class="container footer-grid">
        <div class="footer-col brand-col">
          <a routerLink="/" class="logo">
            <span class="gradient-text">CodexByte</span>
          </a>
          <p class="company-desc">Transforming Ideas into Digital Excellence. We build modern, scalable web and mobile solutions for forward-thinking businesses.</p>
          <div class="social-links">
            <a href="#" aria-label="LinkedIn">in</a>
            <a href="#" aria-label="Twitter">tw</a>
            <a href="#" aria-label="Facebook">fb</a>
            <a href="#" aria-label="Instagram">ig</a>
          </div>
        </div>
        
        <div class="footer-col">
          <h3>Quick Links</h3>
          <ul>
            <li><a routerLink="/" fragment="about">About Us</a></li>
            <li><a routerLink="/" fragment="services">Services</a></li>
            <li><a routerLink="/" fragment="portfolio">Portfolio</a></li>
            <li><a routerLink="/" fragment="pricing">Pricing</a></li>
          </ul>
        </div>
        
        <div class="footer-col">
          <h3>Services</h3>
          <ul>
            <li><a href="#">Web Development</a></li>
            <li><a href="#">Angular Development</a></li>
            <li><a href="#">UI/UX Design</a></li>
            <li><a href="#">E-commerce Solutions</a></li>
          </ul>
        </div>
        
        <div class="footer-col">
          <h3>Contact Us</h3>
          <ul class="contact-info">
            <li>📧 hello&#64;codexbyte.com</li>
            <li>📞 +1 (555) 123-4567</li>
            <li>📍 123 Tech Valley, CA 94043</li>
          </ul>
        </div>
      </div>
      
      <div class="footer-bottom">
        <p>&copy; 2026 CodexByte. All rights reserved.</p>
      </div>
    </footer>
  `,
  styles: [`
    .footer {
      background-color: var(--surface-color);
      border-top: 1px solid var(--border-color);
      padding-top: var(--spacing-xl);
      margin-top: auto;
    }
    
    .footer-grid {
      display: grid;
      grid-template-columns: 2fr 1fr 1fr 1.5fr;
      gap: 3rem;
      margin-bottom: var(--spacing-xl);
    }
    
    @media (max-width: 992px) {
      .footer-grid {
        grid-template-columns: 1fr 1fr;
      }
    }
    
    @media (max-width: 576px) {
      .footer-grid {
        grid-template-columns: 1fr;
      }
    }
    
    .logo {
      font-size: 1.5rem;
      font-weight: 700;
      display: inline-block;
      margin-bottom: 1rem;
      text-decoration: none;
    }
    
    .company-desc {
      color: var(--text-secondary);
      margin-bottom: 1.5rem;
    }
    
    .social-links {
      display: flex;
      gap: 1rem;
    }
    
    .social-links a {
      width: 40px;
      height: 40px;
      border-radius: 50%;
      background: var(--glass-bg);
      border: 1px solid var(--glass-border);
      display: flex;
      align-items: center;
      justify-content: center;
      transition: all var(--transition-fast);
      color: var(--text-primary);
      text-decoration: none;
    }
    
    .social-links a:hover {
      background: var(--primary-yellow);
      color: var(--primary-dark);
      transform: translateY(-3px);
      box-shadow: 0 4px 12px rgba(250, 204, 21, 0.4);
    }
    
    .footer-col h3 {
      font-size: 1.25rem;
      margin-bottom: 1.5rem;
      position: relative;
      padding-bottom: 0.5rem;
    }
    
    .footer-col h3::after {
      content: '';
      position: absolute;
      left: 0;
      bottom: 0;
      width: 40px;
      height: 2px;
      background: var(--gradient-main);
    }
    
    .footer-col ul {
      display: flex;
      flex-direction: column;
      gap: 0.75rem;
    }
    
    .footer-col a {
      color: var(--text-secondary);
      transition: color var(--transition-fast);
      text-decoration: none;
    }
    
    .footer-col a:hover {
      color: var(--primary-yellow);
    }
    
    .contact-info {
      display: flex;
      flex-direction: column;
      gap: 0.75rem;
    }
    
    .contact-info li {
      color: var(--text-secondary);
      display: flex;
      gap: 0.5rem;
    }
    
    .footer-bottom {
      border-top: 1px solid var(--border-color);
      padding: 1.5rem 0;
      text-align: center;
      color: var(--text-secondary);
      font-size: 0.875rem;
    }
  `]
})
export class FooterComponent { }
