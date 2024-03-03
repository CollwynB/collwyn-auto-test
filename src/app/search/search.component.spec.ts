import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule } from '@angular/forms';
import { Search } from './search.component';

describe('SearchComponent', () => {
  let component: Search;
  let fixture: ComponentFixture<Search>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FormsModule],
    });
    fixture = TestBed.createComponent(Search);
    component = fixture.componentInstance;
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should emit search event on form submission', () => {
    const searchSpy = spyOn(component.search, 'emit');

    component.searchTerm = 'test';
    fixture.detectChanges();

    const form = fixture.nativeElement.querySelector(
      '[data-testid="search-form"]'
    );
    form.dispatchEvent(new Event('submit'));
    fixture.detectChanges();

    expect(searchSpy).toHaveBeenCalledWith({
      searchTerm: 'test',
      showDisabled: true,
    });
  });

  it('should toggle showDisabled and emit search event', () => {
    const searchSpy = spyOn(component.search, 'emit');

    component.showDisabled = true;
    fixture.detectChanges();

    const checkbox = fixture.nativeElement.querySelector(
      '[data-testid="disabled-toggle"]'
    );
    checkbox.dispatchEvent(new Event('change'));
    fixture.detectChanges();

    expect(component.showDisabled).toBe(false);
    expect(searchSpy).toHaveBeenCalledOnceWith({
      searchTerm: '',
      showDisabled: false,
    });
  });
});
