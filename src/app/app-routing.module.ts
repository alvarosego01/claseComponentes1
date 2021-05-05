import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ElementsComponent } from './pages/elements/elements.component';
import { HomeComponent } from './pages/home/home.component';
import { RetornosComponent } from './pages/retornos/retornos.component';




const routes: Routes = [

  { path: 'home', component: HomeComponent },
  { path: 'elementos', component: ElementsComponent },
  { path: 'retornos', component: RetornosComponent },
  { path: '**', component: HomeComponent },
  { path: '', component: HomeComponent }

];



@NgModule({
  imports: [
    RouterModule.forRoot( routes, { useHash: false } ),


  ],
  exports: [ RouterModule ]
})
export class AppRoutingModule { }
