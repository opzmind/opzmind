import { Component } from '@angular/core';
import { HeroComponent } from '../../features/hero/hero.component';
import { AboutComponent } from '../../features/about/about.component';
import { ServicesComponent } from '../../features/services/services.component';
import { PortfolioComponent } from '../../features/portfolio/portfolio.component';
import { PricingComponent } from '../../features/pricing/pricing.component';
import { TestimonialsComponent } from '../../features/testimonials/testimonials.component';
import { ContactComponent } from '../../features/contact/contact.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    HeroComponent,
    AboutComponent,
    ServicesComponent,
    PortfolioComponent,
    PricingComponent,
    TestimonialsComponent,
    ContactComponent
  ],
  template: `
    <app-hero></app-hero>
    <app-about></app-about>
    <app-services></app-services>
    <app-portfolio></app-portfolio>
    <app-pricing></app-pricing>
    <app-testimonials></app-testimonials>
    <app-contact></app-contact>
  `
})
export class HomeComponent { }
