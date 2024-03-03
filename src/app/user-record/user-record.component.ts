import { Component, EventEmitter, Input, Output } from '@angular/core';
import { User } from '../../model/user';
import { httpsCallable } from '@angular/fire/functions';
import { CommonModule } from '@angular/common';
import { FunctionsService } from '../services/functions.service';

@Component({
  selector: 'user-record',
  templateUrl: 'user-record.component.html',
  styleUrl: 'user-record.component.scss',
  standalone: true,
  imports: [CommonModule],
})
export class UserRecord {
  @Input({ required: true }) user: User = {
    enabled: false,
    id: 'error-no-id',
    name: 'No name found',
    role: 'No role found',
  };
  @Output() edit = new EventEmitter<User>();

  loading: boolean = false;

  constructor(public functions: FunctionsService) {}

  openEditModal() {
    this.edit.emit(this.user);
  }

  deleteUser() {
    const deleteDoc = httpsCallable(this.functions.functions, 'deleteUser');
    this.loading = true;
    deleteDoc({ id: this.user.id })
      .then((result) => {
        this.loading = false;
        return result;
      })
      .catch((e) => {
        this.loading = false;
        console.error(e);
      });
  }
}
