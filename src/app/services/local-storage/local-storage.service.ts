import { Injectable } from '@angular/core';

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
    return JSON.parse(localStorage.getItem('articles'));
  }
}
