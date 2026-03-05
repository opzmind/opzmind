import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-pricing',
  standalone: true,
  imports: [CommonModule],
  template: `
    <section id="pricing" class="pricing section-padding">
      <div class="container">
        <div class="section-title text-center">
          <h4 class="gradient-text tracking-wide">PRICING</h4>
          <h2>Choose Your Plan</h2>
          <p class="section-subtitle">Transparent pricing for premium digital solutions.</p>
        </div>
        
        <div class="pricing-grid">
          <div class="pricing-card glass-card">
            <h3 class="plan-name">Basic</h3>
            <div class="plan-price">
              <span class="currency">$</span>
              <span class="amount">999</span>
            </div>
            <p class="plan-desc">Perfect for small businesses starting their digital journey.</p>
            
            <ul class="plan-features">
              <li><span class="check">✓</span> 5-page Responsive Website</li>
              <li><span class="check">✓</span> Basic SEO Setup</li>
              <li><span class="check">✓</span> Contact Form</li>
              <li class="disabled"><span class="cross">✕</span> E-commerce Functionality</li>
              <li class="disabled"><span class="cross">✕</span> Custom Dashboard</li>
            </ul>
            
            <a href="#contact" class="btn btn-outline full-width">Get Started</a>
          </div>
          
          <div class="pricing-card glass-card popular">
            <div class="popular-badge">Most Popular</div>
            <h3 class="plan-name gradient-text">Standard</h3>
            <div class="plan-price">
              <span class="currency">$</span>
              <span class="amount">2499</span>
            </div>
            <p class="plan-desc">Ideal for growing companies needing advanced features.</p>
            
            <ul class="plan-features">
              <li><span class="check">✓</span> Up to 15 Pages</li>
              <li><span class="check">✓</span> Advanced SEO & Analytics</li>
              <li><span class="check">✓</span> CMS Integration</li>
              <li><span class="check">✓</span> Custom Animations</li>
              <li class="disabled"><span class="cross">✕</span> Native Mobile App</li>
            </ul>
            
            <a href="#contact" class="btn btn-primary full-width">Get Started</a>
          </div>
          
          <div class="pricing-card glass-card">
            <h3 class="plan-name">Premium</h3>
            <div class="plan-price">
              <span class="currency">$</span>
              <span class="amount">4999</span>
            </div>
            <p class="plan-desc">Comprehensive solution for enterprise-level applications.</p>
            
            <ul class="plan-features">
              <li><span class="check">✓</span> Unlimited Pages</li>
              <li><span class="check">✓</span> Full E-commerce System</li>
              <li><span class="check">✓</span> Custom Web App (Angular)</li>
              <li><span class="check">✓</span> API Development</li>
              <li><span class="check">✓</span> Priority 24/7 Support</li>
            </ul>
            
            <a href="#contact" class="btn btn-outline full-width">Get Started</a>
          </div>
        </div>
      </div>
    </section>
  `,
  styles: [`
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
    
    .pricing-grid {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
      gap: 2rem;
      align-items: center;
    }
    
    .pricing-card {
      padding: 3rem 2rem;
      position: relative;
      background: var(--surface-color);
      border-radius: 16px;
    }
    
    .pricing-card.popular {
      transform: scale(1.05);
      border-color: var(--primary-yellow);
      box-shadow: 0 10px 40px rgba(139, 92, 246, 0.2);
      z-index: 1;
    }
    
    @media (max-width: 992px) {
      .pricing-card.popular {
        transform: scale(1);
      }
    }
    
    .popular-badge {
      position: absolute;
      top: -15px;
      left: 50%;
      transform: translateX(-50%);
      background: var(--gradient-main);
      color: white;
      padding: 0.5rem 1.5rem;
      border-radius: 50px;
      font-size: 0.875rem;
      font-weight: 600;
      white-space: nowrap;
    }
    
    .plan-name {
      font-size: 1.5rem;
      margin-bottom: 1rem;
      text-align: center;
    }
    
    .plan-price {
      text-align: center;
      margin-bottom: 1.5rem;
    }
    
    .currency {
      font-size: 1.5rem;
      font-weight: 600;
      vertical-align: top;
      margin-right: 0.25rem;
    }
    
    .amount {
      font-size: 4rem;
      font-family: var(--font-heading);
      font-weight: 700;
      line-height: 1;
    }
    
    .plan-desc {
      text-align: center;
      color: var(--text-secondary);
      margin-bottom: 2rem;
      font-size: 0.95rem;
    }
    
    .plan-features {
      margin-bottom: 2.5rem;
    }
    
    .plan-features li {
      margin-bottom: 1rem;
      display: flex;
      align-items: center;
      gap: 0.75rem;
    }
    
    .plan-features li.disabled {
      color: var(--text-secondary);
      opacity: 0.6;
    }
    
    .check {
      color: #10b981;
      font-weight: bold;
    }
    
    .cross {
      color: #ef4444;
      font-weight: bold;
    }
    
    .full-width {
      width: 100%;
    }
  `]
})
export class PricingComponent { }
