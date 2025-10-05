import { Component, inject, OnInit, signal } from '@angular/core';
import { UsersService } from '../../../Services/Users/users.service';
import { Users } from '../../../Models/users.types';

@Component({
  selector: 'app-users',
  imports: [],
  templateUrl: './users.component.html',
})
export class UsersComponent implements OnInit {
  private usersService = inject(UsersService);
  users = signal<Users[]>([]);

  // Récupération des utilisateurs
  getUsers(): void {
    this.usersService.getUsers().subscribe({
      next: (data: Users[]) => {
        this.users.set(data); // mise à jour du signal
      },
      error: (err: any) => {
        alert(err?.message || 'Une erreur est survenue');
      },
    });
  }

  ngOnInit(): void {
    this.getUsers();
  }
}
