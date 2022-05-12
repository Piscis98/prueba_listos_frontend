import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ContainerAppComponent } from './components/container-app/container-app.component';

const routes: Routes = [{path:'', component:ContainerAppComponent,  children:
[
 { path: 'home', loadChildren: () => import('./pages/home/home.module').then(m => m.HomeModule) },
 {path:'', redirectTo:'/home', pathMatch:'full'}
]},
  // { path: 'login', loadChildren: () => import('./pages/login/login.module').then(m => m.LoginModule) },
  { path: 'admin', loadChildren: () => import('./pages/admin/admin.module').then(m => m.AdminModule) }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
