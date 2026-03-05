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
          <a routerLink="/" class="logo" aria-label="opzmind">
            <div class="logo-wrapper">
              <div class="logo-circle"></div>
              <span class="logo-text-opz">opz</span>
              <span class="logo-text-mind">mind</span>
              <div class="logo-dot"></div>
            </div>
          </a>
          <p class="company-desc">Transforming Ideas into Digital Excellence. We build modern, scalable web and mobile solutions for forward-thinking businesses.</p>
          <div class="social-links">
            <a href="#" aria-label="LinkedIn">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
                <rect x="2" y="9" width="4" height="12"></rect>
                <circle cx="4" cy="4" r="2"></circle>
              </svg>
            </a>
            <a href="#" aria-label="Twitter">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                <path d="M23 3a10.9 10.9 0 0 1-3.14 1.53 4.48 4.48 0 0 0-7.86 3v1A10.66 10.66 0 0 1 3 4s-4 9 5 13a11.64 11.64 0 0 1-7 2c9 5 20 0 20-11.5a4.5 4.5 0 0 0-.08-.83A7.72 7.72 0 0 0 23 3z"></path>
              </svg>
            </a>
            <a href="#" aria-label="Facebook">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path>
              </svg>
            </a>
            <a href="https://www.instagram.com/opzmind._?igsh=enNyM3U1Y2JleHB6" target="_blank" aria-label="Instagram">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
                <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
              </svg>
            </a>
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
            <li>
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="contact-svg">
                <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path>
                <polyline points="22,6 12,13 2,6"></polyline>
              </svg>
              <span>opzmind&#64;gmail.com</span>
            </li>
            <li>
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="contact-svg">
                <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>
              </svg>
              <span>6381367917</span>
            </li>
            <li>
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="contact-svg">
                <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path>
                <circle cx="12" cy="10" r="3"></circle>
              </svg>
              <span>chennai, india</span>
            </li>
          </ul>
        </div>
      </div>
      
      <div class="footer-bottom">
        <p>&copy; 2024 opzmind. All rights reserved.</p>
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
      gap: 1rem;
    }
    
    .contact-info li {
      color: var(--text-secondary);
      display: flex;
      align-items: center;
      gap: 0.75rem;
    }
    
    .contact-svg {
      flex-shrink: 0;
      color: var(--primary-yellow);
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
