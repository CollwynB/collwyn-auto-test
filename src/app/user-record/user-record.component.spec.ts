import { ComponentFixture, TestBed } from '@angular/core/testing';
import { UserRecord } from './user-record.component';
import { FunctionsService } from '../services/functions.service';
import { User } from '../../model/user';

class MockFunctionsService {}

describe('UserRecordComponent', () => {
  let component: UserRecord;
  let fixture: ComponentFixture<UserRecord>;
  const testUser: User = {
    id: '1',
    name: 'Test User',
    role: 'Tester',
    enabled: true,
  };
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        UserRecord,
        { provide: FunctionsService, useValue: MockFunctionsService },
      ],
    });
    fixture = TestBed.createComponent(UserRecord);
    component = fixture.componentInstance;
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should emit edit event when openEditModal is called', () => {
    spyOn(component.edit, 'emit');
    component.user = testUser;
    component.openEditModal();
    expect(component.edit.emit).toHaveBeenCalledWith(testUser);
  });
});
