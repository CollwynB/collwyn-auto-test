import { Component, EventEmitter, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'search',
  templateUrl: 'search.component.html',
  styleUrl: 'search.component.scss',
  standalone: true,
  imports: [FormsModule],
})
export class Search {
  @Output() search = new EventEmitter<{
    searchTerm: string;
    showDisabled: boolean;
  }>();

  searchTerm: string = '';
  showDisabled: boolean = true;

  toggleDisabled() {
    this.emitSearch();
  }

  emitSearch() {
    this.search.emit({
      searchTerm: this.searchTerm,
      showDisabled: this.showDisabled,
    });
  }
}
