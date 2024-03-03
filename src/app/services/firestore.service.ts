import { Injectable, inject } from '@angular/core';
import {
  Firestore,
  collection,
  collectionData,
  doc,
  setDoc,
  updateDoc,
} from '@angular/fire/firestore';
import { User } from '../../model/user';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class FirestoreService {
  users: Observable<any[]> = new Observable();

  constructor(public firestore: Firestore) {
    this.firestore = inject(Firestore);
    const users = collection(this.firestore, 'users');
    this.users = collectionData(users);
  }

  getUsers() {
    return this.users;
  }

  createUser(newUser: User) {
    const id = crypto.randomUUID();
    const users = collection(this.firestore, 'users');
    setDoc(doc(users, id), {
      ...newUser,
      id,
      dateCreated: new Date(),
      lastEdited: new Date(),
    });
  }

  updateUser(updatedUser: User) {
    const users = collection(this.firestore, 'users');
    updateDoc(doc(users, updatedUser.id), {
      ...updatedUser,
      lastEdited: new Date(),
    });
  }
}
