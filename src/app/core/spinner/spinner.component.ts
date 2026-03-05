import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-spinner',
  standalone: true,
  imports: [CommonModule],
  template: `
    <div *ngIf="show" class="spinner-overlay">
      <div class="spinner">
        <div class="double-bounce1"></div>
        <div class="double-bounce2"></div>
      </div>
    </div>
  `,
  styles: [`
    .spinner-overlay {
      position: fixed;
      top: 0;
      left: 0;
      width: 100vw;
      height: 100vh;
      background: var(--bg-color);
      z-index: 9999;
      display: flex;
      justify-content: center;
      align-items: center;
    }
    
    .spinner {
      width: 60px;
      height: 60px;
      position: relative;
    }

    .double-bounce1, .double-bounce2 {
      width: 100%;
      height: 100%;
      border-radius: 50%;
      background: var(--gradient-main);
      opacity: 0.6;
      position: absolute;
      top: 0;
      left: 0;
      animation: sk-bounce 2.0s infinite ease-in-out;
    }

    .double-bounce2 {
      animation-delay: -1.0s;
    }

    @keyframes sk-bounce {
      0%, 100% { 
        transform: scale(0.0);
      } 50% { 
        transform: scale(1.0);
      }
    }
  `]
})
export class SpinnerComponent {
  @Input() show = false;
}
