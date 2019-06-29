import { TestBed, inject } from '@angular/core/testing';

import { HttpClient, HttpHeaders, HttpHandler } from '@angular/common/http';
import { NewsApiService } from './news-api.service';

describe('NewsApiService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [NewsApiService, HttpClient, HttpHandler]
    });
  });

  it('should be created', inject([NewsApiService], (service: NewsApiService) => {
    expect(service).toBeTruthy();
  }));
});
