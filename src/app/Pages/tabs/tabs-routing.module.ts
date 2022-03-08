import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TabsPage } from './tabs.page';

const routes: Routes = [
  {
    path: '',
    component: TabsPage,
    children: [
      {
        path: 'accueil',
        loadChildren : () => import('../acceuil/acceuil.module').then(m => m.AcceuilPageModule)
      },
      {
        path: 'search',
        loadChildren : () => import('../search/search.module').then(m => m.SearchPageModule)
      },
      {
        path: 'chat',
        loadChildren : () => import('../chat/chat.module').then(m => m.ChatPageModule)
      },
      {
        path: 'ecole',
        loadChildren : () => import('../list-ecole/list-ecole.module').then(m => m.ListEcolePageModule)
      },
      
      {
        path: '',
        redirectTo: 'accueil',
        pathMatch: 'full'
      }
    ]
  }
  
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TabsPageRoutingModule {}
