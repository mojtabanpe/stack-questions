import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ErrorComponent } from './components/error/error.component';


const routes: Routes = [
  { path: 'hello', loadChildren: () => import('./modules/hello/hello.module').then(m => m.HelloModule)}, 
  { path: 'home', loadChildren: () => import('./modules/home/home.module').then(m => m.HomeModule)}, 
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: '**', component: ErrorComponent }
]


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
