import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule } from '@angular/forms';
import { UserForm } from './user-form.component';
import { User } from '../../model/user';

describe('UserFormComponent', () => {
  let component: UserForm;
  let fixture: ComponentFixture<UserForm>;
  const newUser: User = {
    id: '0',
    name: 'John Doe',
    role: 'Admin',
    enabled: true,
  };

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [FormsModule, UserForm],
    });
    fixture = TestBed.createComponent(UserForm);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should emit submit event on form submission', () => {
    const submitSpy = spyOn(component.submitUser, 'emit');

    component.newUser = newUser;
    fixture.detectChanges();

    const form = fixture.nativeElement.querySelector(
      '[data-testid="user-form"]'
    );
    form.dispatchEvent(new Event('submit'));
    fixture.detectChanges();

    expect(submitSpy).toHaveBeenCalledWith(newUser);
  });

  it('should emit closeModal event on close button click', () => {
    const closeModalSpy = spyOn(component.closeModal, 'emit');

    const closeButton = fixture.nativeElement.querySelector(
      '[data-testid="close-form"]'
    );
    closeButton.click();
    fixture.detectChanges();

    expect(closeModalSpy).toHaveBeenCalled();
  });
});
