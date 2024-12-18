import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { CarritoComponent } from './carrito/carrito.component';
import { MisVentasComponent } from './mis-ventas/mis-ventas.component'; 
import { CategoryProductsComponent } from './category-products/category-products.component'; // Importa el nuevo componente

const routes: Routes = [
  { path: '', redirectTo: '/login', pathMatch: 'full' },
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'dashboard', component: DashboardComponent },
  { path: 'mi-carrito', component: CarritoComponent },
  { path: 'mis-ventas', component: MisVentasComponent },
  { path: 'category/:category', component: CategoryProductsComponent } // Añade la nueva ruta
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
