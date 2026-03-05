import { Routes } from '@angular/router';

export const routes: Routes = [
    {
        path: '',
        loadComponent: () => import('./pages/home/home.component').then(m => m.HomeComponent),
        title: 'CodexByte | Digital Excellence'
    },
    {
        path: '**',
        loadComponent: () => import('./core/not-found/not-found.component').then(m => m.NotFoundComponent),
        title: '404 - Page Not Found | CodexByte'
    }
];
