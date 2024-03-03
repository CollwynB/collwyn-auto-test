import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { UserRecord } from './user-record/user-record.component';
import { UserForm } from './user-form/user-form.component';
import { Search } from './search/search.component';
import { User } from '../model/user';
import { FirestoreService } from './services/firestore.service';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, UserForm, UserRecord, Search],
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  usersToDisplay: User[] = [];
  addingUser: boolean = false;
  editingUser: User | null = null;

  constructor(public firestore: FirestoreService) {
    this.firestore.users.subscribe((users) => {
      this.usersToDisplay = users;
    });
  }

  openEditModal(user: User) {
    this.editingUser = user;
  }

  createUser(user: User) {
    this.firestore.createUser(user);
    this.addingUser = false;
  }

  updateUser(user: User) {
    this.firestore.updateUser(user);
    this.editingUser = null;
  }

  filterUsers({
    searchTerm,
    showDisabled,
  }: {
    searchTerm: string;
    showDisabled: boolean;
  }) {
    if (this.firestore === null) return;

    const term = searchTerm.toLowerCase();
    this.firestore.users.subscribe((users) => {
      this.usersToDisplay = users.filter(
        (user) =>
          user.name.toLowerCase().includes(term) ||
          user.role.toLowerCase().includes(term)
      );

      if (!showDisabled)
        this.usersToDisplay = this.usersToDisplay.filter(
          (user) => user.enabled
        );
    });
    if (!showDisabled) {
    }
    return;
  }
}
