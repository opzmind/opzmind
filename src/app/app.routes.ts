import { Routes } from '@angular/router';

export const routes: Routes = [
    {
        path: '',
        loadComponent: () => import('./pages/home/home.component').then(m => m.HomeComponent),
        title: 'opzmind | Digital Excellence'
    },
    {
        path: 'service/:id',
        loadComponent: () => import('./pages/service-detail/service-detail.component').then(m => m.ServiceDetailComponent),
        title: 'Service Details | opzmind'
    },
    {
        path: '**',
        loadComponent: () => import('./core/not-found/not-found.component').then(m => m.NotFoundComponent),
        title: '404 - Page Not Found | opzmind'
    }
];
