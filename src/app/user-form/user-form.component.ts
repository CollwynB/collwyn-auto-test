import { Component, EventEmitter, Input, Output, inject } from '@angular/core';
import { User } from '../../model/user';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'user-form',
  templateUrl: 'user-form.component.html',
  styleUrl: 'user-form.component.scss',
  standalone: true,
  imports: [FormsModule],
})
export class UserForm {
  @Input() title: string = 'User form';
  @Input() set user(user: User) {
    this.newUser = { ...user };
  }
  @Output() submitUser = new EventEmitter<User>();
  @Output() closeModal = new EventEmitter<null>();

  newUser: User = { ...this.user };
}
