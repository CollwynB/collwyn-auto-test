import { Observable } from 'rxjs';

export class MockFirestoreService {
  users: Observable<any[]> = new Observable();
  getUsers() {
    return this.users;
  }

  createUser(_: string) {}
  updateUser(_: string) {}
}
