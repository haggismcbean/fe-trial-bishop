import { TestBed, async } from '@angular/core/testing';
import { HttpClient, HttpHeaders, HttpHandler } from '@angular/common/http';
import { Store, StoreModule } from '@ngrx/store';

import { AppComponent } from './app.component';

import { ArticleComponent } from './components/article/article.component';
import { TimelineComponent } from './components/timeline/timeline.component';
import { MenuComponent } from './components/menu/menu.component';

import { ArticleService } from './services/article/article.service';
import { LocalStorageService } from './services/local-storage/local-storage.service';
import { NewsApiService } from './services/news-api/news-api.service';

const components = [
  AppComponent,
  ArticleComponent,
  TimelineComponent,
  MenuComponent
];

const services = [
  ArticleService,
  LocalStorageService,
  NewsApiService
];

describe('AppComponent', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        StoreModule.forRoot({})
      ],
      declarations: [
        ...components
      ],
      providers: [
        Store,
        HttpClient,
        HttpHandler,
        ...services
      ]
    }).compileComponents();
  }));

  it('should create the app', async(() => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  }));

  it(`should have as title 'fe-trial-bishop'`, async(() => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app.title).toEqual('fe-trial-bishop');
  }));
});
