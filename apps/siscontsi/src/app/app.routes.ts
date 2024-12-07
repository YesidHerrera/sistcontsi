import { Route } from '@angular/router';

export const appRoutes: Route[] = [
    {
        path: 'dashboard',
        loadComponent: () => import('@ingeniemos.la/dashboard').then(m => m.DashboardComponent)
    },
    { path: '**', redirectTo: 'dashboard' }
];
