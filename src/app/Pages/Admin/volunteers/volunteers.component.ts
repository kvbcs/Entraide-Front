import { Component, inject, OnInit, signal } from '@angular/core';
import { VolunteersService } from '../../../Services/Volunteers/volunteers.service';
import { Volunteers } from '../../../Models/volunteers.types';

@Component({
  selector: 'app-volunteers',
  imports: [],
  templateUrl: './volunteers.component.html',
})
export class VolunteersComponent implements OnInit {
  private volunteersService = inject(VolunteersService);
  volunteers = signal<Volunteers[]>([]);

  // Récupération des utilisateurs
  getVolunteers(): void {
    this.volunteersService.getVolunteers().subscribe({
      next: (data: Volunteers[]) => {
        this.volunteers.set(data); // mise à jour du signal
      },
      error: (err: any) => {
        alert(err?.message || 'Une erreur est survenue');
      },
    });
  }

  ngOnInit(): void {
    this.getVolunteers();
  }
}
