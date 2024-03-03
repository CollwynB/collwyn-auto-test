import { TestBed } from '@angular/core/testing';
import { AppComponent } from './app.component';
import { FirebaseAppModule } from '@angular/fire/app';
import { FirestoreService } from './services/firestore.service';

import { MockFirestoreService } from '../mocks/FirestoreService';

describe('AppComponent', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AppComponent, FirebaseAppModule],
      providers: [
        { provide: FirestoreService, useClass: MockFirestoreService },
      ],
    });
  });

  it('should create the app', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });

  it('should set adding user to true when add user is clicked', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    const element = fixture.debugElement.nativeElement;

    element.querySelector("[data-testid='add-user']").click();
    expect(app.addingUser).toBe(true);
  });
});
