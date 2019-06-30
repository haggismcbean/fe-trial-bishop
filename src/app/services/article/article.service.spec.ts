import { TestBed, inject } from '@angular/core/testing';
import { of } from 'rxjs';

import * as moment from 'moment';
import * as _ from 'lodash';

import { HttpClient, HttpHeaders, HttpHandler } from '@angular/common/http';
import { NewsApiService } from '../news-api/news-api.service';
import { ArticleService } from './article.service';

const MOCK_NEWS = [[
  {
    title: 'olderArticle',
    description: 'a mocked news article',
    url: 'http://google.com',
    tag: 'business',
    publishedAt: '2019-05-30T10:00:50Z'
  },
  {
    title: 'newArticle',
    description: 'a mocked news article',
    url: 'http://google.com',
    tag: 'business',
    publishedAt: '2019-06-30T10:00:50Z'
  }
]];

describe('ArticleService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ArticleService, NewsApiService, HttpClient, HttpHandler]
    });
  });

  it('should be created', inject([ArticleService], (service: ArticleService) => {
    expect(service).toBeTruthy();
  }));

  describe('getAll()', () => {
    it('should call the newsApiService.getNewsAbout function once for each topic',
        inject([ArticleService, NewsApiService], (service: ArticleService, newsApiService: NewsApiService) => {
      const newsSpy = spyOn(newsApiService, 'getNewsAbout');

      service.getAll();

      expect(newsApiService.getNewsAbout).toHaveBeenCalled();
      expect(newsSpy.calls.count()).toBe(5);
    }));

    it('should convert dates to moment dates',
        inject([ArticleService, NewsApiService], (service: ArticleService, newsApiService: NewsApiService) => {
      const newsSpy = spyOn(newsApiService, 'getNewsAbout')
                        .and
                        .returnValue(MOCK_NEWS);

      service.getAll().subscribe((articles) => {
        expect(typeof articles[0].publishedAt).toBe('object');
        expect(articles[0].publishedAt.isValid()).toBe(true);
      });
    }));

    it('should sort articles to put newest articles at the top',
        inject([ArticleService, NewsApiService], (service: ArticleService, newsApiService: NewsApiService) => {
      const newsSpy = spyOn(newsApiService, 'getNewsAbout')
                        .and
                        .returnValue(MOCK_NEWS);

      service.getAll().subscribe((articles) => {
        expect(articles[0].title).toBe('newArticle');
        expect(_.last(articles).title).toBe('olderArticle');
      });
    }));

    it('should return a flattened array of articles',
        inject([ArticleService, NewsApiService], (service: ArticleService, newsApiService: NewsApiService) => {
      const newsSpy = spyOn(newsApiService, 'getNewsAbout')
                        .and
                        .returnValue(MOCK_NEWS);

      service.getAll().subscribe((articles) => {
        expect(articles.length).toBe(2 * _.keys(service.TAGS).length);
      });
    }));
  });

  describe('get()', () => {
    it('should call the newsApiService.getNewsAbout function once',
        inject([ArticleService, NewsApiService], (service: ArticleService, newsApiService: NewsApiService) => {
      const newsSpy = spyOn(newsApiService, 'getNewsAbout')
                       .and
                       .returnValue(of());

      const key = _.keys(service.TAGS)[0];

      service.get(key);

      expect(newsApiService.getNewsAbout).toHaveBeenCalled();
      expect(newsSpy.calls.count()).toBe(1);
      expect(newsSpy.calls.mostRecent().args[0]).toBe('sport');
    }));

    it('should pass as a parameter the name of the topic to get news about',
        inject([ArticleService, NewsApiService], (service: ArticleService, newsApiService: NewsApiService) => {
      const newsSpy = spyOn(newsApiService, 'getNewsAbout')
                       .and
                       .returnValue(of());

      const key = _.keys(service.TAGS)[0];

      service.get(key);

      expect(newsSpy.calls.mostRecent().args[0]).toBe(key);
    }));
  });

});
