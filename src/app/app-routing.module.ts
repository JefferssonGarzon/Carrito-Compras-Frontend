import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CartComponent } from './components/cart/cart.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { LoginComponent } from './components/login/login.component';
import { RegistrationComponent } from './components/registration/registration.component';

const routes: Routes = [
  {path: "", redirectTo: "dashboard", pathMatch: "full"},
  {path: "dashboard", component: DashboardComponent},
  {path: "cart", component: CartComponent},
  {path: "login", component: LoginComponent},
  {path: "registrarse", component: RegistrationComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
