import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-not-found',
  standalone: true,
  imports: [RouterModule],
  template: `
    <section class="not-found section-padding animate-fade-in">
      <div class="container text-center">
        <h1 class="error-code gradient-text">404</h1>
        <h2>Page Not Found</h2>
        <p>The page you are looking for might have been removed, had its name changed, or is temporarily unavailable.</p>
        <a routerLink="/" class="btn btn-primary mt-4">Go to Homepage</a>
      </div>
    </section>
  `,
  styles: [`
    .not-found {
      min-height: calc(100vh - 80px - 300px);
      display: flex;
      align-items: center;
      justify-content: center;
    }
    
    .text-center {
      text-align: center;
      max-width: 600px;
      margin: 0 auto;
    }
    
    .error-code {
      font-size: 8rem;
      line-height: 1;
      margin-bottom: 1rem;
    }
    
    .mt-4 {
      margin-top: 2rem;
    }
    
    p {
      color: var(--text-secondary);
      margin-bottom: 2rem;
    }
  `]
})
export class NotFoundComponent { }
