import { Component, OnInit, HostListener } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet, Router, NavigationEnd, Event, Scroll } from '@angular/router';
import { ViewportScroller } from '@angular/common';
import { filter } from 'rxjs/operators';
import { NavbarComponent } from './core/navbar/navbar.component';
import { FooterComponent } from './core/footer/footer.component';
import { SpinnerComponent } from './core/spinner/spinner.component';
import { SeoService } from './core/seo/seo.service';
import { ThemeService } from './core/theme/theme.service';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet, NavbarComponent, FooterComponent, SpinnerComponent],
  template: `
    <app-spinner [show]="isLoading"></app-spinner>
    <div class="app-layout">
      <app-navbar></app-navbar>
      
      <main class="main-content">
        <router-outlet></router-outlet>
      </main>
      
      <app-footer></app-footer>
    </div>
  `,
  styles: [`
    .app-layout {
      display: flex;
      flex-direction: column;
      min-height: 100vh;
    }
    .main-content {
      flex: 1;
    }
  `]
})
export class AppComponent implements OnInit {
  isLoading = true;

  constructor(
    private router: Router,
    private viewportScroller: ViewportScroller,
    private seoService: SeoService,
    private themeService: ThemeService
  ) { }

  ngOnInit() {
    this.seoService.updateSeo(
      'opzmind | Digital Excellence',
      'opzmind is a premier digital agency specializing in modern web development, local SEO, SaaS solutions, and stunning UI/UX design.'
    );

    setTimeout(() => {
      this.isLoading = false;
    }, 1200);

    this.router.events.pipe(
      filter((e: Event): e is Scroll => e instanceof Scroll)
    ).subscribe(e => {
      if (e.position) {
        this.viewportScroller.scrollToPosition(e.position);
      } else if (e.anchor) {
        setTimeout(() => {
          this.viewportScroller.scrollToAnchor(e.anchor!);
        }, 100);
      } else {
        this.viewportScroller.scrollToPosition([0, 0]);
      }
    });
  }
}
