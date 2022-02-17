import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)
  },

  {
    path: 'splash',
    loadChildren: () => import('./Pages/splash/splash.module').then( m => m.SplashPageModule)
  },

  {
    path: 'login',
    loadChildren: () => import('./Pages/login/login.module').then( m => m.LoginPageModule)
  },
   {
    path: '',
    redirectTo: 'splash',
    pathMatch: 'full'
  },
  {
    path: 'register',
    loadChildren: () => import('./Pages/register/register.module').then( m => m.RegisterPageModule)
  },
  {
    path: 'acceuil',
    loadChildren: () => import('./Pages/acceuil/acceuil.module').then( m => m.AcceuilPageModule)
  },
  {
    path: 'list-initier',
    loadChildren: () => import('./Pages/list-initier/list-initier.module').then( m => m.ListInitierPageModule)
  },
  {
    path: 'notification',
    loadChildren: () => import('./Pages/notification/notification.module').then( m => m.NotificationPageModule)
  },

  {
    path: 'search',
    loadChildren: () => import('./Pages/search/search.module').then(m => m.SearchPageModule)
  }

];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
