import { Injectable } from '@angular/core';
import { of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LocalStorageService {

  constructor(
  ) {
  }

  public saveArticles(articles) {
    localStorage.setItem('articles', JSON.stringify(articles));
  }

  public getSavedArticles() {
    return of(['test']);
    // return JSON.parse(localStorage.getItem('articles'));
  }
}
