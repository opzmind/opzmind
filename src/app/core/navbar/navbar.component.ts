import { Component, inject, HostListener } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { ThemeService } from '../theme/theme.service';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [CommonModule, RouterModule],
  template: `
    <nav [class.scrolled]="isScrolled" class="navbar">
      <div class="container nav-container">
        <a routerLink="/" class="logo">
          <span class="gradient-text">CodexByte</span>
        </a>

        <div class="nav-links" [class.active]="isMobileMenuOpen">
          <a routerLink="/" fragment="about" (click)="closeMenu()">About</a>
          <a routerLink="/" fragment="services" (click)="closeMenu()">Services</a>
          <a routerLink="/" fragment="portfolio" (click)="closeMenu()">Portfolio</a>
          <a routerLink="/" fragment="pricing" (click)="closeMenu()">Pricing</a>
          <a routerLink="/" fragment="contact" (click)="closeMenu()">Contact</a>
          <button class="theme-toggle" (click)="themeService.toggleTheme()">
            <span *ngIf="!themeService.isDarkMode()">🌙</span>
            <span *ngIf="themeService.isDarkMode()">☀️</span>
          </button>
        </div>

        <button class="mobile-toggle" (click)="toggleMenu()">
          <span>☰</span>
        </button>
      </div>
    </nav>
  `,
  styles: [`
    .navbar {
      position: fixed;
      top: 0;
      left: 0;
      width: 100%;
      z-index: 1000;
      transition: all var(--transition-normal);
      padding: 1.5rem 0;
      background: transparent;
    }

    .navbar.scrolled {
      background: var(--glass-bg);
      backdrop-filter: blur(12px);
      -webkit-backdrop-filter: blur(12px);
      border-bottom: 1px solid var(--glass-border);
      padding: 1rem 0;
      box-shadow: var(--glass-shadow);
    }

    .nav-container {
      display: flex;
      justify-content: space-between;
      align-items: center;
    }

    .logo {
      font-family: var(--font-heading);
      font-size: 1.5rem;
      font-weight: 700;
      text-decoration: none;
    }

    .nav-links {
      display: flex;
      align-items: center;
      gap: 2rem;
    }

    .nav-links a {
      font-weight: 500;
      transition: color var(--transition-fast);
      cursor: pointer;
    }

    .nav-links a:hover {
      color: var(--primary-yellow);
    }

    .theme-toggle {
      background: none;
      border: none;
      cursor: pointer;
      font-size: 1.25rem;
      display: flex;
      align-items: center;
      justify-content: center;
      padding: 0.5rem;
      border-radius: 50%;
      transition: background-color var(--transition-fast);
    }

    .theme-toggle:hover {
      background-color: var(--surface-color);
    }

    .mobile-toggle {
      display: none;
      background: none;
      border: none;
      color: var(--text-primary);
      font-size: 1.5rem;
      cursor: pointer;
    }

    @media (max-width: 768px) {
      .mobile-toggle {
        display: block;
      }

      .nav-links {
        position: absolute;
        top: 100%;
        left: 0;
        width: 100%;
        background: var(--bg-color);
        flex-direction: column;
        padding: 2rem;
        gap: 1.5rem;
        box-shadow: 0 10px 30px rgba(0,0,0,0.1);
        clip-path: polygon(0 0, 100% 0, 100% 0, 0 0);
        transition: clip-path 0.4s ease-in-out;
      }

      .nav-links.active {
        clip-path: polygon(0 0, 100% 0, 100% 100%, 0 100%);
      }
    }
  `]
})
export class NavbarComponent {
  themeService = inject(ThemeService);
  isScrolled = false;
  isMobileMenuOpen = false;

  @HostListener('window:scroll', [])
  onWindowScroll() {
    this.isScrolled = window.scrollY > 50;
  }

  toggleMenu() {
    this.isMobileMenuOpen = !this.isMobileMenuOpen;
  }

  closeMenu() {
    this.isMobileMenuOpen = false;
  }
}
