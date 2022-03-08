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
    path: 'list-initier',
    loadChildren: () => import('./Pages/list-initier/list-initier.module').then( m => m.ListInitierPageModule)
  },
  {
    path: 'notification',
    loadChildren: () => import('./Pages/notification/notification.module').then( m => m.NotificationPageModule)
  },

  {
    path: 'profil',
    loadChildren : () => import('./Pages/profil/profil.module').then(m => m.ProfilPageModule)
  },
  {
    path: 'edit-profile',
    loadChildren: () => import('./Pages/edit-profile/edit-profile.module').then( m => m.EditProfilePageModule)
  },
  {
    path: 'forgot-pass',
    loadChildren: () => import('./Pages/forgot-pass/forgot-pass.module').then( m => m.ForgotPassPageModule)
  },
  
  {
    path: 'tabs',
    loadChildren: () => import('./Pages/tabs/tabs.module').then( m => m.TabsPageModule)
  },
  {
    path: 'detail-chat/:id',
    loadChildren: () => import('./Pages/detail-chat/detail-chat.module').then( m => m.DetailChatPageModule)
  },  {
    path: 'list-ecole',
    loadChildren: () => import('./Pages/list-ecole/list-ecole.module').then( m => m.ListEcolePageModule)
  }




];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
