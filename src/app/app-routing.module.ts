import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from 'src/pages/home/home.component';
import { BreedsComponent } from 'src/pages/breeds/breeds.component';


const routes: Routes = [
  {
    path: '',
    redirectTo: '/breeds',
    pathMatch: 'full'
  },
  {
      path: 'breeds',
      component: BreedsComponent
  },
  {
    path: 'home',
    component: HomeComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
