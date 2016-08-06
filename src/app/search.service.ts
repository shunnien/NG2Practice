import { Injectable } from '@angular/core';
import { IArticle } from './shared/article';
import { Http } from '@angular/http';

@Injectable()
export class SearchService {

  data: IArticle[];

  constructor(private http:Http) {
     http.get('/api/articles.json').subscribe((value) => {
       this.data = this.defaults = value.json();
     });
  }

  doSearch(keyword: string) {
    this.data = this.defaults.filter((value: IArticle) => {
      return value.title.toLowerCase().indexOf(keyword.toLowerCase()) > -1;
    });
  }

  defaults: IArticle[];
}
