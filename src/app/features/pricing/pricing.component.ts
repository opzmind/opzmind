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
          <h4 class="gradient-text tracking-wide">OUR PRICING</h4>
          <h2>Transparent & Value-Driven Pricing</h2>
          <p class="section-subtitle">Premium digital solutions tailored to fit businesses of all sizes in India and beyond.</p>
        </div>
        
        <div class="pricing-grid mb-5">
          <!-- Website Development -->
          <div class="pricing-card glass-card d-flex-col">
            <h3 class="plan-name">Website Development</h3>
            <p class="plan-desc">Custom websites designed for performance, scaling, and high conversion.</p>
            <div class="service-items">
              <div class="service-item">
                <span class="name">Basic Website</span>
                <span class="price">₹5,000</span>
              </div>
              <div class="service-item">
                <span class="name">Business Website</span>
                <span class="price">₹10,000</span>
              </div>
              <div class="service-item">
                <span class="name">Premium Website</span>
                <span class="price">₹20,000</span>
              </div>
            </div>
            
            <div class="service-items mt-3 pt-3 border-top">
               <h4 class="sub-heading">Individual Solutions</h4>
               <div class="service-item">
                 <span class="name">Personal Portfolio</span>
                 <span class="price">₹2,500</span>
               </div>
            </div>
            <a href="#contact" class="btn btn-outline full-width mt-auto">Inquire Now</a>
          </div>
          
          <!-- Local Business Package -->
          <div class="pricing-card glass-card popular d-flex-col">
            <div class="popular-badge">Highly Recommended</div>
            <h3 class="plan-name gradient-text">Local Business Package</h3>
            <div class="plan-price">
              <span class="currency">₹</span>
              <span class="amount">12,000</span>
            </div>
            <p class="plan-desc">The ultimate all-in-one digital presence solution to dominate local search.</p>
            <ul class="plan-features">
              <li><span class="check">✓</span> Professional Website included</li>
              <li><span class="check">✓</span> Google Maps Listing Setup</li>
              <li><span class="check">✓</span> WhatsApp Business Integration</li>
              <li><span class="check">✓</span> Priority Local Visibility</li>
            </ul>
            <a href="#contact" class="btn btn-primary full-width mt-auto">Get This Package</a>
          </div>

          <!-- Google Maps Business -->
          <div class="pricing-card glass-card d-flex-col">
            <h3 class="plan-name">Google Maps Business</h3>
            <p class="plan-desc">Maximize your local foot traffic and attract nearby customers effectively.</p>
            <div class="service-items">
              <div class="service-item">
                <span class="name">Profile Setup</span>
                <span class="price">₹2,000</span>
              </div>
              <div class="service-item">
                <span class="name">Optimization & SEO</span>
                <span class="price">₹3,500</span>
              </div>
            </div>
            
            <div class="service-items mt-3 pt-3 border-top">
               <h4 class="sub-heading">SaaS Solutions</h4>
               <p class="plan-desc text-left mb-2">Custom cloud software tailored for your operations.</p>
               <div class="price-highlight">Starting from <span class="highlight-amount">₹25,000</span></div>
            </div>
            <a href="#contact" class="btn btn-outline full-width mt-auto">Discuss Requirements</a>
          </div>
        </div>
        
        <!-- Bottom Row for Maintenance and Infrastructure -->
        <div class="pricing-grid two-cols">
          <div class="pricing-card glass-card horizontal">
             <div class="card-content">
                 <h3 class="plan-name text-left">Website Maintenance</h3>
                 <p class="plan-desc text-left mb-0">Ongoing technical support, security patches, and rapid issue resolution.</p>
             </div>
             <div class="card-action text-right">
                <div class="highlight-amount">₹1,000 <span style="font-size:1rem;font-weight:normal;color:var(--text-secondary);">/ mo</span></div>
             </div>
          </div>
          
          <div class="pricing-card glass-card horizontal">
             <div class="card-content">
                 <h3 class="plan-name text-left">Domain & Hosting Setup</h3>
                 <p class="plan-desc text-left mb-2">Complete infrastructure configuration. <br/><span class="note">*Domain and internet hosting are renewed annually by the client.</span></p>
             </div>
             <div class="card-action text-right">
                 <div class="price-highlight" style="margin-top:0;">Starting from <br/> <span class="highlight-amount">₹3,000</span> <span style="font-size:1rem;font-weight:normal;color:var(--text-secondary);">/ yr</span></div>
             </div>
          </div>
        </div>

      </div>
    </section>
  `,
  styles: [`
    .text-center { text-align: center; max-width: 700px; margin: 0 auto 4rem auto; }
    .text-left { text-align: left !important; }
    .text-right { text-align: right; }
    .mb-5 { margin-bottom: 3rem; }
    .mb-0 { margin-bottom: 0 !important; }
    .mb-2 { margin-bottom: 0.5rem; }
    .mt-3 { margin-top: 1rem; }
    .pt-3 { padding-top: 1rem; }
    .mt-auto { margin-top: auto; }
    .border-top { border-top: 1px solid var(--border-color); }
    
    .section-title h4 {
      font-size: 0.875rem; margin-bottom: 0.5rem; letter-spacing: 2px; font-weight: 600; text-transform: uppercase;
    }
    .section-title h2 { font-size: clamp(2rem, 4vw, 3rem); margin-bottom: 1rem; }
    .section-subtitle { color: var(--text-secondary); font-size: 1.125rem; }
    
    .pricing-grid {
      display: grid; grid-template-columns: repeat(auto-fit, minmax(320px, 1fr)); gap: 2rem; align-items: stretch;
    }
    
    .two-cols {
      grid-template-columns: 1fr 1fr;
    }
    
    .d-flex-col {
      display: flex; flex-direction: column;
    }
    
    .pricing-card {
      padding: 3rem 2rem; position: relative; background: var(--surface-color); border-radius: 16px;
    }
    
    .pricing-card.horizontal {
      display: flex; align-items: center; justify-content: space-between; gap: 2rem; padding: 2.5rem 2rem;
    }
    
    .card-content { flex: 1; text-align: left; }
    .card-action { flex-shrink: 0; }
    
    @media (max-width: 992px) {
      .two-cols { grid-template-columns: 1fr; }
      .pricing-card.horizontal { flex-direction: column; text-align: center; }
      .pricing-card.horizontal .card-content, .pricing-card.horizontal .plan-name, .pricing-card.horizontal .plan-desc, .pricing-card.horizontal .text-left { text-align: center !important; }
      .pricing-card.horizontal .card-action, .pricing-card.horizontal .text-right { text-align: center; }
    }
    
    .pricing-card.popular {
      transform: scale(1.05); border-color: var(--primary-yellow); box-shadow: 0 10px 40px rgba(250, 204, 21, 0.15); z-index: 1;
    }
    
    @media (max-width: 992px) {
      .pricing-card.popular { transform: scale(1); }
    }
    
    .popular-badge {
      position: absolute; top: -15px; left: 50%; transform: translateX(-50%); background: var(--gradient-main); color: var(--primary-dark); padding: 0.5rem 1.5rem; border-radius: 50px; font-size: 0.875rem; font-weight: 700; white-space: nowrap; box-shadow: 0 4px 10px rgba(250, 204, 21, 0.4);
    }
    
    .plan-name { font-size: 1.5rem; margin-bottom: 1rem; text-align: center; }
    
    .plan-price { text-align: center; margin-bottom: 1.5rem; }
    
    .currency { font-size: 1.5rem; font-weight: 600; vertical-align: top; margin-right: 0.25rem; }
    
    .amount { font-size: 4rem; font-family: var(--font-heading); font-weight: 700; line-height: 1; color: var(--text-primary); }
    
    .plan-desc { text-align: center; color: var(--text-secondary); margin-bottom: 2rem; font-size: 0.95rem; }
    
    .service-items { display: flex; flex-direction: column; gap: 1rem; margin-bottom: 2rem; width: 100%; }
    
    .service-item { display: flex; justify-content: space-between; align-items: center; border-bottom: 1px dashed var(--border-color); padding-bottom: 0.5rem; }
    .service-item:last-child { border-bottom: none; padding-bottom: 0; }
    
    .service-item .name { font-weight: 600; font-size: 1rem; color: var(--text-primary); }
    .service-item .price { font-weight: 700; color: var(--primary-yellow); font-family: var(--font-heading); font-size: 1.125rem; }
    
    .sub-heading { font-size: 1.125rem; margin-bottom: 0.5rem; color: var(--text-primary); }
    
    .price-highlight { font-size: 1rem; font-weight: 500; color: var(--text-primary); }
    .highlight-amount { font-size: 1.75rem; font-weight: 700; color: var(--primary-yellow); font-family: var(--font-heading); }
    
    .note { font-size: 0.85rem; color: var(--text-secondary); font-style: italic; }
    
    .plan-features { margin-bottom: 2rem; flex-grow: 1; }
    .plan-features li { margin-bottom: 1rem; display: flex; align-items: center; gap: 0.75rem; color: var(--text-primary); font-weight: 500; }
    .check { color: #10b981; font-weight: bold; font-size: 1.125rem; }
    .full-width { width: 100%; }
  `]
})
export class PricingComponent { }
