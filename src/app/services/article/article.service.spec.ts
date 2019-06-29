import { TestBed, inject } from '@angular/core/testing';

import { HttpClient, HttpHeaders, HttpHandler } from '@angular/common/http';
import { NewsApiService } from '../news-api/news-api.service';
import { ArticleService } from './article.service';

describe('ArticleService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ArticleService, NewsApiService, HttpClient, HttpHandler]
    });
  });

  it('should be created', inject([ArticleService], (service: ArticleService) => {
    expect(service).toBeTruthy();
  }));
});
