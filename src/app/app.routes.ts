import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: 'home',
    loadComponent: () => import('./home/home.page').then((m) => m.HomePage),
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full',
  },
  {
    path: 'apresentacao',
    loadComponent: () => import('./apresentacao/apresentacao.page').then( m => m.ApresentacaoPage)
  },
  {
    path: 'etapa1',
    loadComponent: () => import('./apresentacao/etapa1/etapa1.page').then( m => m.Etapa1Page)
  },
  {
    path: 'etapa2',
    loadComponent: () => import('./apresentacao/etapa2/etapa2.page').then( m => m.Etapa2Page)
  },
  {
    path: 'etapa3',
    loadComponent: () => import('./apresentacao/etapa3/etapa3.page').then( m => m.Etapa3Page)
  },
];
