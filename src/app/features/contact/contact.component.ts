import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  template: `
    <section id="contact" class="contact section-padding">
      <div class="container">
        <div class="section-title text-center">
          <h4 class="gradient-text tracking-wide">GET IN TOUCH</h4>
          <h2>Let's Talk About Your Project</h2>
        </div>
        
        <div class="contact-grid">
          <div class="contact-info glass-card">
            <h3>Contact Information</h3>
            <p class="mb-4">Fill out the form and our team will get back to you within 24 hours.</p>
            
            <div class="info-item">
              <span class="info-icon">📍</span>
              <div>
                <h4>Our Location</h4>
                <p>Chennai, India</p>
              </div>
            </div>
            
            <div class="info-item">
              <span class="info-icon">📞</span>
              <div>
                <h4>Phone Number</h4>
                <p>+91 6381367917</p>
              </div>
            </div>
            
            <div class="info-item">
              <span class="info-icon">📧</span>
              <div>
                <h4>Email Address</h4>
                <p>codexbyte&#64;.com</p>
              </div>
            </div>
            
            <!-- <div class="map-placeholder mt-4">
              <div class="map-bg">
                <span>Interactive Map View (Google Maps Embed)</span>
              </div>
            </div> -->
          </div>
          
          <div class="contact-form-wrapper glass-card">
            <form [formGroup]="contactForm" (ngSubmit)="onSubmit()">
              <div class="form-grid">
                <div class="form-group">
                  <label for="name">Your Name</label>
                  <input type="text" id="name" formControlName="name" placeholder="John Doe">
                  <span class="error-msg" *ngIf="isFieldInvalid('name')">Name is required</span>
                </div>
                
                <div class="form-group">
                  <label for="email">Your Email</label>
                  <input type="email" id="email" formControlName="email" placeholder="john@example.com">
                  <span class="error-msg" *ngIf="isFieldInvalid('email')">Valid email is required</span>
                </div>
              </div>
              
              <div class="form-group">
                <label for="phone">Phone Number (Optional)</label>
                <input type="tel" id="phone" formControlName="phone" placeholder="+1 (555) 000-0000">
              </div>
              
              <div class="form-group">
                <label for="subject">Subject</label>
                <input type="text" id="subject" formControlName="subject" placeholder="How can we help?">
                <span class="error-msg" *ngIf="isFieldInvalid('subject')">Subject is required</span>
              </div>
              
              <div class="form-group">
                <label for="message">Your Message</label>
                <textarea id="message" formControlName="message" rows="5" placeholder="Tell us about your project..."></textarea>
                <span class="error-msg" *ngIf="isFieldInvalid('message')">Message is required</span>
              </div>
              
              <button type="submit" class="btn btn-primary full-width mt-3" [disabled]="contactForm.invalid || isSubmitting">
                {{ isSubmitting ? 'Sending...' : 'Send Message' }}
              </button>
              
              <div class="success-msg mt-3" *ngIf="isSuccess">
                Thank you! Your message has been sent successfully.
              </div>
            </form>
          </div>
        </div>
      </div>
      
      <!-- WhatsApp Floating Button -->
      <a href="https://wa.me/6381367917" target="_blank" class="whatsapp-btn" aria-label="Chat on WhatsApp">
        <svg viewBox="0 0 24 24" width="30" height="30" fill="currentColor">
          <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51a12.8 12.8 0 0 0-.57-.01c-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 0 1 2.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0 0 12.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 0 0 5.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 0 0-3.48-8.413Z"/>
        </svg>
      </a>
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
    
    .contact-grid {
      display: grid;
      grid-template-columns: 1fr 1.5fr;
      gap: 3rem;
    }
    
    @media (max-width: 992px) {
      .contact-grid {
        grid-template-columns: 1fr;
      }
    }
    
    .contact-info {
      padding: 3rem;
    }
    
    .contact-info h3 {
      font-size: 1.5rem;
      margin-bottom: 1rem;
    }
    
    .mb-4 { margin-bottom: 2rem; }
    
    .info-item {
      display: flex;
      gap: 1.5rem;
      margin-bottom: 2rem;
    }
    
    .info-icon {
      font-size: 2rem;
      width: 50px;
      height: 50px;
      background: var(--surface-color);
      border-radius: 12px;
      display: flex;
      align-items: center;
      justify-content: center;
      flex-shrink: 0;
    }
    
    .info-item h4 {
      font-size: 1.125rem;
      margin-bottom: 0.25rem;
    }
    
    .info-item p {
      color: var(--text-secondary);
      margin: 0;
    }
    
    .map-bg {
      width: 100%;
      height: 200px;
      background: var(--surface-color);
      border-radius: 12px;
      display: flex;
      align-items: center;
      justify-content: center;
      color: var(--text-secondary);
      border: 1px dashed var(--border-color);
    }
    
    .contact-form-wrapper {
      padding: 3rem;
    }
    
    .form-grid {
      display: grid;
      grid-template-columns: 1fr 1fr;
      gap: 1.5rem;
    }
    
    @media (max-width: 576px) {
      .form-grid {
        grid-template-columns: 1fr;
      }
    }
    
    label {
      display: block;
      margin-bottom: 0.5rem;
      font-weight: 500;
      font-size: 0.875rem;
    }
    
    .mt-3 { margin-top: 1.5rem; }
    .full-width { width: 100%; }
    
    .success-msg {
      color: #10b981;
      padding: 1rem;
      background: rgba(16, 185, 129, 0.1);
      border-radius: 8px;
      text-align: center;
    }
    
    .whatsapp-btn {
      position: fixed;
      bottom: 30px;
      right: 30px;
      width: 60px;
      height: 60px;
      background-color: #25d366;
      border-radius: 50%;
      color: white;
      display: flex;
      align-items: center;
      justify-content: center;
      box-shadow: 0 4px 15px rgba(37, 211, 102, 0.4);
      z-index: 100;
      transition: transform var(--transition-fast);
    }
    
    .whatsapp-btn:hover {
      transform: scale(1.1);
    }
  `]
})
export class ContactComponent {
  contactForm: FormGroup;
  isSubmitting = false;
  isSuccess = false;

  constructor(private fb: FormBuilder) {
    this.contactForm = this.fb.group({
      name: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      phone: [''],
      subject: ['', Validators.required],
      message: ['', Validators.required]
    });
  }

  isFieldInvalid(field: string): boolean {
    const control = this.contactForm.get(field);
    return !!(control && control.invalid && (control.dirty || control.touched));
  }

  onSubmit() {
    if (this.contactForm.valid) {
      this.isSubmitting = true;
      // Simulate API call
      setTimeout(() => {
        this.isSubmitting = false;
        this.isSuccess = true;
        this.contactForm.reset();

        setTimeout(() => {
          this.isSuccess = false;
        }, 5000);
      }, 1500);
    } else {
      this.contactForm.markAllAsTouched();
    }
  }
}
