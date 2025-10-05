import { Routes } from '@angular/router';
import { RegisterComponent } from './Pages/register/register.component';
import { LoginComponent } from './Pages/login/login.component';
import { HomeComponent } from './Pages/home/home.component';
import { NewsComponent } from './Pages/news/news.component';
import { UsersComponent } from './Pages/Admin/users/users.component';
import { VolunteersComponent } from './Pages/Admin/volunteers/volunteers.component';

export const routes: Routes = [
  {
    path: '',
    title: 'Accueil',
    component: HomeComponent,
  },
  {
    path: 'register',
    title: 'Inscription',
    component: RegisterComponent,
  },
  {
    path: 'login',
    title: 'Connexion',
    component: LoginComponent,
  },
  {
    path: 'news',
    title: 'Actualités',
    component: NewsComponent,
  },
  {
    path: 'admin/users',
    title: 'Administration',
    component: UsersComponent,
  },
  {
    path: 'admin/volunteers',
    title: 'Administration Bénévoles',
    component: VolunteersComponent,
  },
];
