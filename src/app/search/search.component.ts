import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { SearchService } from '../search.service';
@Component({
  selector: 'app-search',
  templateUrl: 'search.component.html',
  styleUrls: ['search.component.css']
})
export class SearchComponent implements OnInit {
  @Input()
  keyword: string = '';

  @Output()
  search = new EventEmitter();

  searchText: string = '';
  searchText2: string = '';
  searchModel: string;

  constructor(private searchSearch: SearchService) { }

  ngOnInit() {
  }
  // doSearch2(event: KeyboardEvent, input: HTMLInputElement) {
  //   //var input = event.target as HTMLInputElement;
  //   if (event.keyCode === 13
  //     || (event.target as HTMLButtonElement).id === "searchbutton") {
  //     this.searchText = "Use HTMLInputElement: " + input.value;
  //     this.searchText2 = "Use ngModel: " + this.searchModel;
  //     this.keyword = input.value;
  //     this.search.emit(input.value);
  //   }
  // };
}
